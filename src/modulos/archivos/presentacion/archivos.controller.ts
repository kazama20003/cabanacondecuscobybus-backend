import { Body, Controller, Post } from '@nestjs/common';
import { IsIn, IsString } from 'class-validator';
import { Roles } from '../../autenticacion/presentacion/roles';
import { ArchivosService } from '../aplicacion/archivos.service';

class CrearCargaDto {
  @IsString() nombreArchivo: string;
  @IsIn([
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
    'video/webm',
    'video/quicktime',
  ])
  tipoContenido: string;
  @IsIn(['transportes', 'tours', 'comprobantes']) categoria: string;
}

@Controller('administracion/archivos')
@Roles('ADMINISTRADOR', 'OPERADOR')
export class ArchivosController {
  constructor(private readonly servicio: ArchivosService) {}

  @Post('cargas')
  crearCarga(@Body() datos: CrearCargaDto) {
    return this.servicio.crearCarga(
      datos.nombreArchivo,
      datos.tipoContenido,
      datos.categoria,
    );
  }

  /* Alias retrocompatible */
  @Post('cargas-imagen')
  crearCargaImagen(@Body() datos: CrearCargaDto) {
    return this.servicio.crearCarga(
      datos.nombreArchivo,
      datos.tipoContenido,
      datos.categoria,
    );
  }
}
