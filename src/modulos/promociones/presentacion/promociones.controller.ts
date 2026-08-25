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
import { AuditoriaService } from '../../../compartido/auditoria/auditoria.service';
import { PaginacionDto } from '../../../compartido/paginacion';
import { Roles } from '../../autenticacion/presentacion/roles';
import { UsuarioActual } from '../../autenticacion/presentacion/usuario-actual';
import { PromocionesService } from '../aplicacion/promociones.service';

type Usuario = { id: string; rol: string };

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
  constructor(
    private readonly servicio: PromocionesService,
    private readonly auditoria: AuditoriaService,
  ) {}

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
  async crear(
    @Body() datos: CrearPromocionDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creada = await this.servicio.crear({
      ...datos,
      fechaInicio: new Date(datos.fechaInicio),
      fechaFin: new Date(datos.fechaFin),
    });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'PROMOCION',
      entidadId: creada.id,
      descripcion: `Creó la promoción "${datos.titulo}"`,
      detalle: { cambios: datos as unknown as Record<string, unknown> },
    });
    return creada;
  }

  @Patch('administracion/promociones/:id')
  @Roles('ADMINISTRADOR')
  async actualizar(
    @Param('id') id: string,
    @Body() datos: ActualizarPromocionDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const actualizada = await this.servicio.actualizar(id, {
      ...datos,
      fechaInicio: datos.fechaInicio ? new Date(datos.fechaInicio) : undefined,
      fechaFin: datos.fechaFin ? new Date(datos.fechaFin) : undefined,
    });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ACTUALIZAR',
      entidad: 'PROMOCION',
      entidadId: id,
      descripcion: `Actualizó la promoción "${actualizada.titulo}"`,
      detalle: { cambios: datos as unknown as Record<string, unknown> },
    });
    return actualizada;
  }

  @Delete('administracion/promociones/:id')
  @Roles('ADMINISTRADOR')
  async eliminar(@Param('id') id: string, @UsuarioActual() usuario: Usuario) {
    const resultado = await this.servicio.eliminar(id);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ELIMINAR',
      entidad: 'PROMOCION',
      entidadId: id,
      descripcion: 'Eliminó una promoción',
    });
    return resultado;
  }
}
