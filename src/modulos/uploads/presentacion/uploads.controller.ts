import {
  BadRequestException,
  Controller,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from '../../autenticacion/presentacion/roles';
import { UploadsService } from '../aplicacion/uploads.service';

const TAMANO_MAXIMO_ARCHIVO = 25 * 1024 * 1024;

@Controller('administracion/uploads')
@Roles('ADMINISTRADOR', 'OPERADOR')
export class UploadsController {
  constructor(private readonly servicio: UploadsService) {}

  @Post(':categoria')
  @UseInterceptors(FileInterceptor('archivo'))
  subir(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: TAMANO_MAXIMO_ARCHIVO }),
          new FileTypeValidator({
            fileType: /^(image\/(jpeg|png|webp)|video\/(mp4|webm|quicktime))$/,
          }),
        ],
      }),
    )
    archivo: { buffer: Buffer; mimetype: string },
    @Param('categoria') categoria: string,
  ) {
    if (!['transportes', 'tours', 'promociones', 'comprobantes'].includes(categoria)) {
      throw new BadRequestException('Categoría de archivo no válida');
    }
    return this.servicio.subir(archivo, categoria);
  }

  @Delete(':categoria')
  eliminar(
    @Param('categoria') categoria: string,
    @Query('clave') clave: string,
    @Query('tipo') tipo: 'IMAGEN' | 'VIDEO',
  ) {
    if (!['transportes', 'tours', 'promociones', 'comprobantes'].includes(categoria)) {
      throw new BadRequestException('Categoría de archivo no válida');
    }
    if (!clave || !['IMAGEN', 'VIDEO'].includes(tipo)) {
      throw new BadRequestException('Clave o tipo de archivo inválidos');
    }
    return this.servicio.eliminar(clave, tipo, categoria);
  }
}
