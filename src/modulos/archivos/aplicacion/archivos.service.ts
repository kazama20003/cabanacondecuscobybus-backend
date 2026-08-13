import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ArchivosService {
  constructor(private readonly configuracion: ConfigService) {}

  async crearCargaImagen(
    nombreArchivo: string,
    tipoContenido: string,
    categoria: string,
  ) {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(tipoContenido)) {
      throw new ServiceUnavailableException(
        'Solo se permiten imágenes JPG, PNG o WebP',
      );
    }
    const cuenta = this.configuracion.get<string>('R2_CUENTA_ID');
    const acceso = this.configuracion.get<string>('R2_LLAVE_ACCESO_ID');
    const secreto = this.configuracion.get<string>('R2_LLAVE_SECRETA');
    const bucket = this.configuracion.get<string>('R2_BUCKET');
    const urlPublica = this.configuracion.get<string>('R2_URL_PUBLICA');
    if (!cuenta || !acceso || !secreto || !bucket || !urlPublica) {
      throw new ServiceUnavailableException(
        'Cloudflare R2 no está configurado',
      );
    }

    const extension = nombreArchivo.split('.').pop()?.toLowerCase() ?? 'webp';
    const clave = `imagenes/${categoria}/${randomUUID()}.${extension}`;
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
      urlCarga: await getSignedUrl(cliente, comando, { expiresIn: 600 }),
      urlPublica: `${urlPublica.replace(/\/$/, '')}/${clave}`,
      venceEnSegundos: 600,
    };
  }
}
