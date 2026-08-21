import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import { ObjetivoPromocion, TipoPromocion } from '@prisma/client';
import { PaginacionDto } from '../../../compartido/paginacion';
import { Roles } from '../../autenticacion/presentacion/roles';
import { PromocionesService } from '../aplicacion/promociones.service';

class CrearPromocionDto {
  @IsString() titulo: string;
  @IsOptional() @IsString() descripcion?: string;
  @IsEnum(TipoPromocion) tipo: TipoPromocion;
  @IsOptional() @IsEnum(ObjetivoPromocion) objetivo?: ObjetivoPromocion;
  @IsOptional() @ValidateIf((_, v) => v !== null) @IsUUID() transporteId?: string | null;
  @IsOptional() @ValidateIf((_, v) => v !== null) @IsUUID() tourId?: string | null;
  @IsOptional() @IsString() codigo?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100)
  porcentajeDescuento?: number;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(0.01)
  montoDescuento?: number;
  @IsDateString() fechaInicio: string;
  @IsDateString() fechaFin: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) limiteUsos?: number;
  @IsOptional() @IsString() imagenUrl?: string;
  @IsOptional() @IsString() imagenClave?: string;
  @IsOptional() @IsBoolean() activo?: boolean;
}

class ActualizarPromocionDto {
  @IsOptional() @IsString() titulo?: string;
  @IsOptional() @IsString() descripcion?: string;
  @IsOptional() @IsEnum(TipoPromocion) tipo?: TipoPromocion;
  @IsOptional() @IsEnum(ObjetivoPromocion) objetivo?: ObjetivoPromocion;
  @IsOptional() @ValidateIf((_, v) => v !== null) @IsUUID() transporteId?: string | null;
  @IsOptional() @ValidateIf((_, v) => v !== null) @IsUUID() tourId?: string | null;
  @IsOptional() @IsString() codigo?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100)
  porcentajeDescuento?: number;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(0.01)
  montoDescuento?: number;
  @IsOptional() @IsDateString() fechaInicio?: string;
  @IsOptional() @IsDateString() fechaFin?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) limiteUsos?: number;
  @IsOptional() @IsString() imagenUrl?: string;
  @IsOptional() @IsString() imagenClave?: string;
  @IsOptional() @IsBoolean() activo?: boolean;
}

@Controller()
export class PromocionesController {
  constructor(private readonly servicio: PromocionesService) {}

  /** Público: promociones vigentes (banners del sitio). */
  @Get('promociones')
  vigentes(@Query('objetivo') objetivo?: ObjetivoPromocion) {
    return this.servicio.vigentes(objetivo);
  }

  @Get('administracion/promociones')
  @Roles('ADMINISTRADOR')
  listar(@Query() paginacion: PaginacionDto) {
    return this.servicio.listarAdmin(paginacion);
  }

  @Post('administracion/promociones')
  @Roles('ADMINISTRADOR')
  crear(@Body() datos: CrearPromocionDto) {
    return this.servicio.crear({
      ...datos,
      fechaInicio: new Date(datos.fechaInicio),
      fechaFin: new Date(datos.fechaFin),
    });
  }

  @Patch('administracion/promociones/:id')
  @Roles('ADMINISTRADOR')
  actualizar(@Param('id') id: string, @Body() datos: ActualizarPromocionDto) {
    return this.servicio.actualizar(id, {
      ...datos,
      fechaInicio: datos.fechaInicio ? new Date(datos.fechaInicio) : undefined,
      fechaFin: datos.fechaFin ? new Date(datos.fechaFin) : undefined,
    });
  }

  @Delete('administracion/promociones/:id')
  @Roles('ADMINISTRADOR')
  eliminar(@Param('id') id: string) {
    return this.servicio.eliminar(id);
  }
}
