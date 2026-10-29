import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Storage } from '@google-cloud/storage';
import { randomUUID } from 'node:crypto';

const TIPOS_IMAGEN = ['image/jpeg', 'image/png', 'image/webp'] as const;
const TIPOS_VIDEO = ['video/mp4', 'video/webm', 'video/quicktime'] as const;
const TAMANO_MAXIMO_IMAGEN = 25 * 1024 * 1024;
const TAMANO_MAXIMO_VIDEO = 100 * 1024 * 1024;
const EXTENSIONES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'video/webm': 'webm',
  'video/quicktime': 'mov',
};
const CATEGORIAS = ['transportes', 'tours', 'eventos', 'promociones'] as const;
type Categoria = (typeof CATEGORIAS)[number];
type ArchivoSubido = { buffer: Buffer; mimetype: string; size?: number };
type TipoMedio = 'IMAGEN' | 'VIDEO';

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);
  private readonly storage: Storage;

  constructor(private readonly configuracion: ConfigService) {
    const projectId = this.configuracion.get<string>('GOOGLE_CLOUD_PROJECT');
    this.storage = projectId ? new Storage({ projectId }) : new Storage();
  }

  async subir(archivo: ArchivoSubido | undefined, categoria: string) {
    if (!archivo) throw new BadRequestException('Debe adjuntar un archivo');
    if (!CATEGORIAS.includes(categoria as Categoria))
      throw new BadRequestException('Categoría de archivo no válida');

    const esImagen = TIPOS_IMAGEN.includes(archivo.mimetype as (typeof TIPOS_IMAGEN)[number]);
    const esVideo = TIPOS_VIDEO.includes(archivo.mimetype as (typeof TIPOS_VIDEO)[number]);
    if (!esImagen && !esVideo)
      throw new BadRequestException('Solo se permiten imágenes JPG/PNG/WebP o videos MP4/WebM/MOV');
    const tamanoMaximo = esVideo ? TAMANO_MAXIMO_VIDEO : TAMANO_MAXIMO_IMAGEN;
    if (archivo.buffer.length > tamanoMaximo)
      throw new BadRequestException(`El archivo supera el máximo permitido de ${esVideo ? 100 : 25} MB.`);

    const bucketNombre = this.bucketConfigurado();
    const tipo: TipoMedio = esVideo ? 'VIDEO' : 'IMAGEN';
    const carpeta = `${esVideo ? 'videos' : 'imagenes'}/${categoria}`;
    const nombreObjeto = `${carpeta}/${randomUUID()}.${EXTENSIONES[archivo.mimetype]}`;
    const objeto = this.storage.bucket(bucketNombre).file(nombreObjeto);

    try {
      await objeto.save(archivo.buffer, {
        resumable: esVideo && archivo.buffer.length > 8 * 1024 * 1024,
        validation: 'crc32c',
        metadata: {
          contentType: archivo.mimetype,
          cacheControl: 'public, max-age=31536000, immutable',
          contentDisposition: 'inline',
        },
      });
    } catch (error) {
      this.logger.error(`No se pudo guardar un archivo en Cloud Storage (${categoria})`, error);
      throw new ServiceUnavailableException('No se pudo guardar el archivo en Google Cloud Storage.');
    }

    return {
      clave: `gcs:${nombreObjeto}`,
      tipo,
      urlPublica: `https://storage.googleapis.com/${bucketNombre}/${nombreObjeto}`,
    };
  }

  async eliminar(clave: string, tipo: TipoMedio, categoria: string) {
    if (!CATEGORIAS.includes(categoria as Categoria))
      throw new BadRequestException('Categoría de archivo no válida');
    if (!clave.startsWith('gcs:')) {
      this.logger.warn(`Se omitió la eliminación de un medio legado fuera de GCS (${categoria})`);
      return;
    }
    const nombreObjeto = clave.slice('gcs:'.length);
    const prefijo = `${tipo === 'VIDEO' ? 'videos' : 'imagenes'}/${categoria}/`;
    if (!nombreObjeto.startsWith(prefijo))
      throw new BadRequestException('El archivo no pertenece a la categoría indicada');

    try {
      await this.storage.bucket(this.bucketConfigurado()).file(nombreObjeto).delete({ ignoreNotFound: true });
    } catch (error) {
      this.logger.error(`No se pudo eliminar un archivo de Cloud Storage (${categoria})`, error);
      throw new ServiceUnavailableException('No se pudo eliminar el archivo de Google Cloud Storage.');
    }
  }

  async eliminarSilenciosamente(clave: string | null, tipo: TipoMedio, categoria: string) {
    if (!clave) return;
    try {
      const ruta = clave.startsWith('gcs:') ? clave.slice('gcs:'.length) : clave;
      const categoriaAlmacenada = ruta.split('/')[1];
      const categoriaReal = CATEGORIAS.includes(categoriaAlmacenada as Categoria)
        ? categoriaAlmacenada
        : categoria;
      await this.eliminar(clave, tipo, categoriaReal);
    } catch (error) {
      this.logger.error(`No se pudo eliminar un medio (${categoria})`, error);
    }
  }

  private bucketConfigurado() {
    const bucketNombre = this.configuracion.get<string>('GCS_BUCKET_MEDIA')?.trim();
    if (!bucketNombre)
      throw new ServiceUnavailableException('Falta configurar GCS_BUCKET_MEDIA en el backend.');
    return bucketNombre;
  }
}