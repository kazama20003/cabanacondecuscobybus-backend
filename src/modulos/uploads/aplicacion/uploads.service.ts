import {
  BadRequestException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { randomUUID } from 'node:crypto';

const TIPOS_IMAGEN = ['image/jpeg', 'image/png', 'image/webp'];
const TIPOS_VIDEO = ['video/mp4', 'video/webm', 'video/quicktime'];

type ArchivoSubido = {
  buffer: Buffer;
  mimetype: string;
};

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);

  constructor(private readonly configuracion: ConfigService) {}

  async subir(archivo: ArchivoSubido | undefined, categoria: string) {
    if (!archivo) throw new BadRequestException('Debe adjuntar un archivo');

    const esImagen = TIPOS_IMAGEN.includes(archivo.mimetype);
    const esVideo = TIPOS_VIDEO.includes(archivo.mimetype);
    if (!esImagen && !esVideo) {
      throw new BadRequestException(
        'Solo se permiten imágenes JPG/PNG/WebP o videos MP4/WebM/MOV',
      );
    }

    this.configurarCloudinary();
    const carpeta = `${esVideo ? 'videos' : 'imagenes'}/${categoria}`;
    const resultado = await new Promise<{
      public_id: string;
      resource_type: string;
      secure_url: string;
    }>((resolve, reject) => {
      const carga = cloudinary.uploader.upload_stream(
        {
          folder: carpeta,
          public_id: randomUUID(),
          resource_type: esVideo ? 'video' : 'image',
        },
        (error, respuesta) => {
          if (error || !respuesta) return reject(error);
          resolve(respuesta);
        },
      );
      carga.end(archivo.buffer);
    });

    return {
      clave: resultado.public_id,
      tipo: resultado.resource_type === 'video' ? 'VIDEO' : 'IMAGEN',
      urlPublica: resultado.secure_url,
    };
  }

  async eliminar(clave: string, tipo: 'IMAGEN' | 'VIDEO', categoria: string) {
    const prefijo = `${tipo === 'VIDEO' ? 'videos' : 'imagenes'}/${categoria}/`;
    if (!clave.startsWith(prefijo)) {
      throw new BadRequestException('El archivo no pertenece a la categoría indicada');
    }
    this.configurarCloudinary();
    await cloudinary.uploader.destroy(clave, {
      resource_type: tipo === 'VIDEO' ? 'video' : 'image',
      invalidate: true,
    });
  }

  async eliminarSilenciosamente(
    clave: string | null,
    tipo: 'IMAGEN' | 'VIDEO',
    categoria: string,
  ) {
    if (!clave) return;
    try {
      await this.eliminar(clave, tipo, categoria);
    } catch (error) {
      this.logger.error(`No se pudo eliminar el recurso ${clave} de Cloudinary`, error);
    }
  }

  private configurarCloudinary() {
    const cloudName = this.configuracion.get<string>('CLOUDINARY_CLOUD_NAME');
    const apiKey = this.configuracion.get<string>('CLOUDINARY_API_KEY');
    const apiSecret = this.configuracion.get<string>('CLOUDINARY_API_SECRET');
    if (!cloudName || !apiKey || !apiSecret) {
      throw new ServiceUnavailableException(
        'Cloudinary no está configurado (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)',
      );
    }
    cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
  }
}
