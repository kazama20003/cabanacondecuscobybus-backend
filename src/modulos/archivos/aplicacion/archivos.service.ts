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

  /** URL firmada de carga a AWS S3 para imágenes o videos. */
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
    const region = this.configuracion.get<string>('AWS_REGION');
    const acceso = this.configuracion.get<string>('AWS_ACCESS_KEY_ID');
    const secreto = this.configuracion.get<string>('AWS_SECRET_ACCESS_KEY');
    const bucket = this.configuracion.get<string>('S3_BUCKET');
    if (!region || !acceso || !secreto || !bucket) {
      throw new ServiceUnavailableException(
        'AWS S3 no está configurado (AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET)',
      );
    }
    // URL pública: CloudFront/dominio propio si está definido; si no, la del bucket
    const urlPublica =
      this.configuracion.get<string>('S3_URL_PUBLICA') ||
      `https://${bucket}.s3.${region}.amazonaws.com`;

    const extension = nombreArchivo.split('.').pop()?.toLowerCase() ?? 'bin';
    const carpeta = esVideo ? 'videos' : 'imagenes';
    const clave = `${carpeta}/${categoria}/${randomUUID()}.${extension}`;
    const cliente = new S3Client({
      region,
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
