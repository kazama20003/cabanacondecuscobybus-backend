import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { IsIn, IsString } from 'class-validator';
import { GuardiaAdministrador } from '../../autenticacion/presentacion/guardia-administrador';
import { ArchivosService } from '../aplicacion/archivos.service';

class CrearCargaImagenDto {
  @IsString() nombreArchivo: string;
  @IsIn(['image/jpeg', 'image/png', 'image/webp']) tipoContenido: string;
  @IsIn(['transportes', 'tours', 'comprobantes']) categoria: string;
}

@Controller('administracion/archivos')
@UseGuards(GuardiaAdministrador)
export class ArchivosController {
  constructor(private readonly servicio: ArchivosService) {}

  @Post('cargas-imagen')
  crearCargaImagen(@Body() datos: CrearCargaImagenDto) {
    return this.servicio.crearCargaImagen(
      datos.nombreArchivo,
      datos.tipoContenido,
      datos.categoria,
    );
  }
}
