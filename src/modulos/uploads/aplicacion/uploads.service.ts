import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Storage } from '@google-cloud/storage';
import { v2 as cloudinary } from 'cloudinary';
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
const CATEGORIAS = ['transportes', 'tours', 'eventos', 'promociones', 'comprobantes'] as const;
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
    if (categoria === 'comprobantes' && !esImagen)
      throw new BadRequestException('Los comprobantes deben ser imágenes JPG, PNG o WebP.');
    const tamanoMaximo = esVideo ? TAMANO_MAXIMO_VIDEO : TAMANO_MAXIMO_IMAGEN;
    if (archivo.buffer.length > tamanoMaximo)
      throw new BadRequestException(`El archivo supera el máximo permitido de ${esVideo ? 100 : 25} MB.`);

    // Los comprobantes no deben quedar en el bucket público de medios del catálogo.
    if (categoria === 'comprobantes') return this.subirComprobante(archivo);

    const bucketNombre = this.configuracion.get<string>('GCS_BUCKET_MEDIA')?.trim();
    if (!bucketNombre)
      throw new ServiceUnavailableException('Falta configurar GCS_BUCKET_MEDIA en el backend.');
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
    const prefijo = `${tipo === 'VIDEO' ? 'videos' : 'imagenes'}/${categoria}/`;
    if (clave.startsWith('gcs:')) {
      if (categoria === 'comprobantes') throw new BadRequestException('Los comprobantes no se guardan en el bucket público.');
      const nombreObjeto = clave.slice('gcs:'.length);
      if (!nombreObjeto.startsWith(prefijo))
        throw new BadRequestException('El archivo no pertenece a la categoría indicada');
      const bucketNombre = this.configuracion.get<string>('GCS_BUCKET_MEDIA')?.trim();
      if (!bucketNombre)
        throw new ServiceUnavailableException('Falta configurar GCS_BUCKET_MEDIA en el backend.');
      try {
        await this.storage.bucket(bucketNombre).file(nombreObjeto).delete({ ignoreNotFound: true });
      } catch (error) {
        this.logger.error(`No se pudo eliminar un archivo de Cloud Storage (${categoria})`, error);
        throw new ServiceUnavailableException('No se pudo eliminar el archivo de Google Cloud Storage.');
      }
      return;
    }

    // Las claves antiguas continúan apuntando a Cloudinary para no romper el catálogo existente.
    if (!clave.startsWith(prefijo))
      throw new BadRequestException('El archivo no pertenece a la categoría indicada');
    this.configurarCloudinary();
    await cloudinary.uploader.destroy(clave, {
      resource_type: tipo === 'VIDEO' ? 'video' : 'image',
      invalidate: true,
    });
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

  private async subirComprobante(archivo: ArchivoSubido) {
    this.configurarCloudinary();
    const carpeta = 'imagenes/comprobantes';
    const resultado = await new Promise<{ public_id: string; secure_url: string }>((resolve, reject) => {
      const carga = cloudinary.uploader.upload_stream(
        { folder: carpeta, public_id: randomUUID(), resource_type: 'image' },
        (error, respuesta) => {
          if (error || !respuesta) return reject(error);
          resolve(respuesta);
        },
      );
      carga.end(archivo.buffer);
    });
    return { clave: resultado.public_id, tipo: 'IMAGEN' as const, urlPublica: resultado.secure_url };
  }

  private configurarCloudinary() {
    const cloudName = this.configuracion.get<string>('CLOUDINARY_CLOUD_NAME');
    const apiKey = this.configuracion.get<string>('CLOUDINARY_API_KEY');
    const apiSecret = this.configuracion.get<string>('CLOUDINARY_API_SECRET');
    if (!cloudName || !apiKey || !apiSecret)
      throw new ServiceUnavailableException(
        'Cloudinary para comprobantes no está configurado (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)',
      );
    cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
  }
}
