import { Controller, Get, Query } from '@nestjs/common';
import { IsIn, IsOptional } from 'class-validator';
import { PaginacionDto } from '../paginacion';
import { Roles } from '../../modulos/autenticacion/presentacion/roles';
import { AuditoriaService } from './auditoria.service';

class FiltrosAuditoriaDto extends PaginacionDto {
  @IsOptional()
  @IsIn([
    'TRANSPORTE',
    'TOUR',
    'SALIDA',
    'PLANTILLA_SALIDA',
    'PROMOCION',
    'USUARIO',
    'PAGO',
  ])
  entidad?: string;
}

@Controller()
export class AuditoriaController {
  constructor(private readonly servicio: AuditoriaService) {}

  @Get('administracion/auditoria')
  @Roles('ADMINISTRADOR')
  listar(@Query() filtros: FiltrosAuditoriaDto) {
    return this.servicio.listar(filtros, filtros.entidad);
  }
}
