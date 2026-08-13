import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'node:crypto';

const TIPOS_IMAGEN = ['image/jpeg', 'image/png', 'image/webp'];
const TIPOS_VIDEO = ['video/mp4', 'video/webm', 'video/quicktime'];

@Injectable()
export class ArchivosService {
  constructor(private readonly configuracion: ConfigService) {}

  /** URL firmada de carga a Cloudflare R2 para imágenes o videos. */
  async crearCarga(
    nombreArchivo: string,
    tipoContenido: string,
    categoria: string,
  ) {
    const esImagen = TIPOS_IMAGEN.includes(tipoContenido);
    const esVideo = TIPOS_VIDEO.includes(tipoContenido);
    if (!esImagen && !esVideo) {
      throw new BadRequestException(
        'Solo se permiten imágenes JPG/PNG/WebP o videos MP4/WebM/MOV',
      );
    }
    const cuenta = this.configuracion.get<string>('R2_CUENTA_ID');
    const acceso = this.configuracion.get<string>('R2_LLAVE_ACCESO_ID');
    const secreto = this.configuracion.get<string>('R2_LLAVE_SECRETA');
    const bucket = this.configuracion.get<string>('R2_BUCKET');
    const urlPublica = this.configuracion.get<string>('R2_URL_PUBLICA');
    if (!cuenta || !acceso || !secreto || !bucket || !urlPublica) {
      throw new ServiceUnavailableException(
        'Cloudflare R2 no está configurado (R2_CUENTA_ID, R2_LLAVE_ACCESO_ID, R2_LLAVE_SECRETA, R2_BUCKET, R2_URL_PUBLICA)',
      );
    }

    const extension = nombreArchivo.split('.').pop()?.toLowerCase() ?? 'bin';
    const carpeta = esVideo ? 'videos' : 'imagenes';
    const clave = `${carpeta}/${categoria}/${randomUUID()}.${extension}`;
    const cliente = new S3Client({
      region: 'auto',
      endpoint: `https://${cuenta}.r2.cloudflarestorage.com`,
      credentials: { accessKeyId: acceso, secretAccessKey: secreto },
    });
    const comando = new PutObjectCommand({
      Bucket: bucket,
      Key: clave,
      ContentType: tipoContenido,
    });
    return {
      clave,
      tipo: esVideo ? 'VIDEO' : 'IMAGEN',
      urlCarga: await getSignedUrl(cliente, comando, { expiresIn: 600 }),
      urlPublica: `${urlPublica.replace(/\/$/, '')}/${clave}`,
      venceEnSegundos: 600,
    };
  }
}
