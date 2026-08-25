import {
  Body,
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

const EsLatitud = () => [IsNumber(), Min(-90), Max(90)];
const EsLongitud = () => [IsNumber(), Min(-180), Max(180)];
function aplicar(decoradores: PropertyDecorator[]): PropertyDecorator {
  return (target, key) => decoradores.forEach((d) => d(target, key));
}
import { IsBoolean } from 'class-validator';
import { AuditoriaService } from '../../../compartido/auditoria/auditoria.service';
import { PaginacionDto } from '../../../compartido/paginacion';
import { Roles } from '../../autenticacion/presentacion/roles';
import { UsuarioActual } from '../../autenticacion/presentacion/usuario-actual';
import { CatalogoService } from '../aplicacion/catalogo.service';
import { PlantillasSalidaService } from '../aplicacion/plantillas-salida.service';

type Usuario = { id: string; rol: string };

const IDIOMAS_CATALOGO = ['es', 'en', 'fr', 'it', 'pt', 'zh', 'ja', 'ru', 'de'];

class FiltrosTransportesDto extends PaginacionDto {
  @IsOptional() @IsString() origen?: string;
  @IsOptional() @IsString() destino?: string;
}
class FiltrosToursDto extends PaginacionDto {
  @IsOptional() @IsString() destino?: string;
}

class ContenidoDto {
  @IsString() titulo: string;
  @IsString() resumen: string;
  @IsString() descripcion: string;
  @IsOptional() @IsString() queLlevar?: string;
  @IsOptional() @IsString() incluye?: string;
  @IsOptional() @IsString() noIncluye?: string;
}
class EditarTraduccionDto {
  @IsOptional() @IsString() titulo?: string;
  @IsOptional() @IsString() resumen?: string;
  @IsOptional() @IsString() descripcion?: string;
  @IsOptional() @IsString() queLlevar?: string;
  @IsOptional() @IsString() incluye?: string;
  @IsOptional() @IsString() noIncluye?: string;
  @IsOptional() @IsIn(['BORRADOR', 'PUBLICADA']) estado?: 'BORRADOR' | 'PUBLICADA';
}
class MedioDto {
  @IsString() url: string;
  @IsOptional() @IsString() clave?: string;
  @IsOptional() @IsString() textoAlterno?: string;
  @IsOptional() @IsIn(['IMAGEN', 'VIDEO']) tipo?: 'IMAGEN' | 'VIDEO';
}
class ParadaDto {
  @IsString() nombre: string;
  @aplicar(EsLatitud()) latitud: number;
  @aplicar(EsLongitud()) longitud: number;
  @IsInt() @Min(0) minutos: number;
  @IsOptional() @IsInt() @Min(0) duracionParadaMinutos?: number;
  @IsOptional() @IsString() descripcion?: string;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
}
class CrearTransporteDto {
  @IsString() slug: string;
  @IsString() origenNombre: string;
  @aplicar(EsLatitud()) origenLatitud: number;
  @aplicar(EsLongitud()) origenLongitud: number;
  @IsString() destinoNombre: string;
  @aplicar(EsLatitud()) destinoLatitud: number;
  @aplicar(EsLongitud()) destinoLongitud: number;
  @IsInt() @Min(1) duracionMinutosEstimada: number;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParadaDto)
  paradas?: ParadaDto[];
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
  @IsOptional()
  @ValidateNested()
  @Type(() => ContenidoDto)
  contenido?: ContenidoDto;
}
class CrearTourDto {
  @IsString() slug: string;
  @IsString() destinoNombre: string;
  @aplicar(EsLatitud()) destinoLatitud: number;
  @aplicar(EsLongitud()) destinoLongitud: number;
  @IsInt() @Min(1) duracionMinutos: number;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
  @IsOptional()
  @ValidateNested()
  @Type(() => ContenidoDto)
  contenido?: ContenidoDto;
}
class ActualizarTransporteDto {
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() origenNombre?: string;
  @IsOptional() @aplicar(EsLatitud()) origenLatitud?: number;
  @IsOptional() @aplicar(EsLongitud()) origenLongitud?: number;
  @IsOptional() @IsString() destinoNombre?: string;
  @IsOptional() @aplicar(EsLatitud()) destinoLatitud?: number;
  @IsOptional() @aplicar(EsLongitud()) destinoLongitud?: number;
  @IsOptional() @IsInt() @Min(1) duracionMinutosEstimada?: number;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
  @IsOptional()
  @ValidateNested()
  @Type(() => ContenidoDto)
  contenido?: ContenidoDto;
}
class ActualizarTourDto {
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() destinoNombre?: string;
  @IsOptional() @aplicar(EsLatitud()) destinoLatitud?: number;
  @IsOptional() @aplicar(EsLongitud()) destinoLongitud?: number;
  @IsOptional() @IsInt() @Min(1) duracionMinutos?: number;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
  @IsOptional()
  @ValidateNested()
  @Type(() => ContenidoDto)
  contenido?: ContenidoDto;
}
class DefinirParadasDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParadaDto)
  paradas: ParadaDto[];
}
class ItemItinerarioDto {
  @IsString() titulo: string;
  @IsString() descripcion: string;
  @IsOptional() @aplicar(EsLatitud()) latitud?: number;
  @IsOptional() @aplicar(EsLongitud()) longitud?: number;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedioDto)
  medios?: MedioDto[];
}
class DefinirItinerarioDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemItinerarioDto)
  items: ItemItinerarioDto[];
}
class FiltrosSalidasDto extends PaginacionDto {
  @IsOptional() @IsIn(['TRANSPORTE', 'TOUR']) tipo?: 'TRANSPORTE' | 'TOUR';
}
class ActualizarSalidaDto {
  @IsOptional()
  @IsIn([
    'BORRADOR',
    'A_LA_VENTA',
    'PENDIENTE_DE_MINIMO',
    'CONFIRMADA',
    'EN_CURSO',
    'FINALIZADA',
    'CANCELADA',
  ])
  estado?:
    | 'BORRADOR'
    | 'A_LA_VENTA'
    | 'PENDIENTE_DE_MINIMO'
    | 'CONFIRMADA'
    | 'EN_CURSO'
    | 'FINALIZADA'
    | 'CANCELADA';
  @IsOptional() @IsString() vehiculoId?: string;
  @IsOptional() @IsInt() @Min(1) capacidad?: number;
  @IsOptional() @IsInt() @Min(1) minimoPasajeros?: number;
  @IsOptional() @IsNumber() @Min(0) precioPen?: number;
  @IsOptional() @IsNumber() @Min(0) precioUsd?: number;
  @IsOptional() @IsDateString() fechaHoraSalida?: string;
}
class CrearSalidaDto {
  @IsDateString() fechaHoraSalida: string;
  @IsInt() @Min(1) capacidad: number;
  @IsOptional() @IsInt() @Min(1) minimoPasajeros?: number;
  @IsNumber() @Min(0) precioPen: number;
  @IsNumber() @Min(0) precioUsd: number;
}
class CrearPlantillaDto {
  /** Hora local de Lima, formato HH:mm. */
  @IsString() horaSalida: string;
  /** Días ISO: 1=lunes … 7=domingo. */
  @IsArray() @IsInt({ each: true }) @Min(1, { each: true }) @Max(7, { each: true })
  diasSemana: number[];
  @IsDateString() fechaDesde: string;
  @IsOptional() @IsDateString() fechaHasta?: string;
  @IsInt() @Min(1) capacidad: number;
  @IsOptional() @IsInt() @Min(1) minimoPasajeros?: number;
  @IsNumber() @Min(0) precioPen: number;
  @IsNumber() @Min(0) precioUsd: number;
  @IsOptional() @IsString() vehiculoId?: string;
  @IsOptional() @IsBoolean() permiteAdelanto?: boolean;
  @IsOptional() @IsInt() @Min(0) @Max(100) porcentajeAdelanto?: number;
}
class ActualizarPlantillaDto {
  @IsOptional() @IsString() horaSalida?: string;
  @IsOptional() @IsArray() @IsInt({ each: true }) @Min(1, { each: true }) @Max(7, { each: true })
  diasSemana?: number[];
  @IsOptional() @IsDateString() fechaDesde?: string;
  /** Null explícito elimina la fecha final (vigencia indefinida). */
  @IsOptional() fechaHasta?: string | null;
  @IsOptional() @IsInt() @Min(1) capacidad?: number;
  @IsOptional() @IsInt() @Min(1) minimoPasajeros?: number;
  @IsOptional() @IsNumber() @Min(0) precioPen?: number;
  @IsOptional() @IsNumber() @Min(0) precioUsd?: number;
  @IsOptional() @IsString() vehiculoId?: string;
  @IsOptional() @IsBoolean() activo?: boolean;
}
class FiltrosPlantillasDto {
  @IsOptional() @IsIn(['TRANSPORTE', 'TOUR']) tipo?: 'TRANSPORTE' | 'TOUR';
}

@Controller()
export class CatalogoController {
  constructor(
    private readonly servicio: CatalogoService,
    private readonly plantillas: PlantillasSalidaService,
    private readonly auditoria: AuditoriaService,
  ) {}
  @Get('transportes') transportes(@Query() filtros: FiltrosTransportesDto) {
    return this.servicio.listarTransportes(
      filtros,
      filtros.origen,
      filtros.destino,
    );
  }
  @Get('transportes/buscar') buscar(
    @Query('origen') origen: string,
    @Query('destino') destino: string,
    @Query('fecha') fecha: string,
    @Query('pasajeros') pasajeros: string,
  ) {
    return this.servicio.buscarSalidasTransporte(
      origen,
      destino,
      new Date(fecha),
      Number(pasajeros),
    );
  }
  @Get('transportes/:slug') transporte(
    @Param('slug') slug: string,
    @Query('idioma') idioma = 'es',
  ) {
    return this.servicio.obtenerTransporte(slug, idioma);
  }
  @Get('tours') tours(@Query() filtros: FiltrosToursDto) {
    return this.servicio.listarTours(filtros, filtros.destino);
  }
  @Get('tours/:slug') tour(
    @Param('slug') slug: string,
    @Query('idioma') idioma = 'es',
  ) {
    return this.servicio.obtenerTour(slug, idioma);
  }

  @Post('administracion/transportes')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearTransporte(
    @Body() datos: CrearTransporteDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creado = await this.servicio.crearTransporte(datos);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'TRANSPORTE',
      entidadId: creado?.id,
      descripcion: `Creó la ruta ${datos.origenNombre} → ${datos.destinoNombre}`,
    });
    return creado;
  }
  @Post('administracion/tours')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearTour(
    @Body() datos: CrearTourDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creado = await this.servicio.crearTour(datos);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'TOUR',
      entidadId: creado?.id,
      descripcion: `Creó el tour ${datos.destinoNombre}`,
    });
    return creado;
  }
  @Patch('administracion/transportes/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async actualizarTransporte(
    @Param('id') id: string,
    @Body() datos: ActualizarTransporteDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const actualizado = await this.servicio.actualizarTransporte(id, datos);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ACTUALIZAR',
      entidad: 'TRANSPORTE',
      entidadId: id,
      descripcion: `Actualizó la ruta ${actualizado?.origenNombre ?? ''} → ${actualizado?.destinoNombre ?? ''}`,
      detalle: { camposCambiados: Object.keys(datos) },
    });
    return actualizado;
  }
  @Patch('administracion/tours/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async actualizarTour(
    @Param('id') id: string,
    @Body() datos: ActualizarTourDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const actualizado = await this.servicio.actualizarTour(id, datos);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ACTUALIZAR',
      entidad: 'TOUR',
      entidadId: id,
      descripcion: `Actualizó el tour ${actualizado?.destinoNombre ?? ''}`,
      detalle: { camposCambiados: Object.keys(datos) },
    });
    return actualizado;
  }
  @Delete('administracion/transportes/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async eliminarTransporte(
    @Param('id') id: string,
    @UsuarioActual() usuario: Usuario,
  ) {
    const resultado = await this.servicio.eliminarTransporte(id);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: resultado.desactivado ? 'DESACTIVAR' : 'ELIMINAR',
      entidad: 'TRANSPORTE',
      entidadId: id,
      descripcion: resultado.mensaje,
    });
    return resultado;
  }
  @Delete('administracion/tours/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async eliminarTour(
    @Param('id') id: string,
    @UsuarioActual() usuario: Usuario,
  ) {
    const resultado = await this.servicio.eliminarTour(id);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: resultado.desactivado ? 'DESACTIVAR' : 'ELIMINAR',
      entidad: 'TOUR',
      entidadId: id,
      descripcion: resultado.mensaje,
    });
    return resultado;
  }
  @Get('administracion/:tipo/:id/traducciones')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  listarTraducciones(
    @Param('tipo') tipo: string,
    @Param('id') id: string,
  ) {
    return this.servicio.listarTraducciones(
      tipo === 'tours' ? 'tour' : 'transporte',
      id,
    );
  }
  @Put('administracion/:tipo/:id/traducciones/:idioma')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  editarTraduccion(
    @Param('tipo') tipo: string,
    @Param('id') id: string,
    @Param('idioma') idioma: string,
    @Body() datos: EditarTraduccionDto,
  ) {
    if (!IDIOMAS_CATALOGO.includes(idioma)) {
      throw new BadRequestException('Idioma no soportado');
    }
    return this.servicio.guardarTraduccion(
      tipo === 'tours' ? 'tour' : 'transporte',
      id,
      idioma,
      datos,
      datos.estado ?? 'PUBLICADA',
    );
  }
  @Post('administracion/tours/:id/itinerario')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  definirItinerario(
    @Param('id') tourId: string,
    @Body() datos: DefinirItinerarioDto,
  ) {
    return this.servicio.definirItinerario(tourId, datos.items);
  }
  @Get('administracion/salidas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  listarSalidas(@Query() filtros: FiltrosSalidasDto) {
    return this.servicio.listarSalidasAdmin(filtros, filtros.tipo ?? 'TRANSPORTE');
  }
  @Patch('administracion/salidas/:tipoSalida/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async actualizarSalida(
    @Param('tipoSalida') tipoSalida: string,
    @Param('id') id: string,
    @Body() cambios: ActualizarSalidaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const actualizada = await this.servicio.actualizarSalida(
      tipoSalida === 'tour' ? 'TOUR' : 'TRANSPORTE',
      id,
      {
        ...cambios,
        fechaHoraSalida: cambios.fechaHoraSalida
          ? new Date(cambios.fechaHoraSalida)
          : undefined,
      },
    );
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ACTUALIZAR',
      entidad: 'SALIDA',
      entidadId: id,
      descripcion: `Actualizó una salida de ${tipoSalida === 'tour' ? 'tour' : 'transporte'}`,
      detalle: { camposCambiados: Object.keys(cambios) },
    });
    return actualizada;
  }
  @Post('administracion/transportes/:id/paradas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  definirParadas(@Param('id') transporteId: string, @Body() datos: DefinirParadasDto) {
    return this.servicio.definirParadas(transporteId, datos.paradas);
  }
  @Post('administracion/transportes/:id/salidas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearSalidaTransporte(
    @Param('id') transporteId: string,
    @Body() datos: CrearSalidaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creada = await this.servicio.crearSalidaTransporte({
      ...datos,
      transporteId,
      fechaHoraSalida: new Date(datos.fechaHoraSalida),
    });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'SALIDA',
      entidadId: creada.id,
      descripcion: `Programó una salida de transporte para ${datos.fechaHoraSalida}`,
    });
    return creada;
  }
  @Post('administracion/tours/:id/salidas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearSalidaTour(
    @Param('id') tourId: string,
    @Body() datos: CrearSalidaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creada = await this.servicio.crearSalidaTour({
      ...datos,
      tourId,
      fechaHoraSalida: new Date(datos.fechaHoraSalida),
    });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'SALIDA',
      entidadId: creada.id,
      descripcion: `Programó una salida de tour para ${datos.fechaHoraSalida}`,
    });
    return creada;
  }

  // ------- Plantillas de salida recurrente -------
  @Get('administracion/plantillas-salida')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  listarPlantillas(@Query() filtros: FiltrosPlantillasDto) {
    return this.plantillas.listar(filtros.tipo);
  }
  @Post('administracion/transportes/:id/plantillas-salida')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearPlantillaTransporte(
    @Param('id') transporteId: string,
    @Body() datos: CrearPlantillaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creada = await this.plantillas.crear({ ...datos, transporteId });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'PLANTILLA_SALIDA',
      entidadId: creada.id,
      descripcion: `Creó horario recurrente de transporte (días ${datos.diasSemana.join(",")} a las ${datos.horaSalida})`,
      detalle: { salidasGeneradas: creada.salidasGeneradas },
    });
    return creada;
  }
  @Post('administracion/tours/:id/plantillas-salida')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async crearPlantillaTour(
    @Param('id') tourId: string,
    @Body() datos: CrearPlantillaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const creada = await this.plantillas.crear({ ...datos, tourId });
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'CREAR',
      entidad: 'PLANTILLA_SALIDA',
      entidadId: creada.id,
      descripcion: `Creó horario recurrente de tour (días ${datos.diasSemana.join(",")} a las ${datos.horaSalida})`,
      detalle: { salidasGeneradas: creada.salidasGeneradas },
    });
    return creada;
  }
  @Patch('administracion/plantillas-salida/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async actualizarPlantilla(
    @Param('id') id: string,
    @Body() cambios: ActualizarPlantillaDto,
    @UsuarioActual() usuario: Usuario,
  ) {
    const actualizada = await this.plantillas.actualizar(id, cambios);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ACTUALIZAR',
      entidad: 'PLANTILLA_SALIDA',
      entidadId: id,
      descripcion:
        cambios.activo === false
          ? 'Pausó un horario recurrente'
          : cambios.activo === true
            ? 'Reactivó un horario recurrente'
            : 'Actualizó un horario recurrente',
      detalle: { camposCambiados: Object.keys(cambios) },
    });
    return actualizada;
  }
  @Delete('administracion/plantillas-salida/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  async eliminarPlantilla(
    @Param('id') id: string,
    @UsuarioActual() usuario: Usuario,
  ) {
    const resultado = await this.plantillas.eliminar(id);
    await this.auditoria.registrar({
      usuarioId: usuario.id,
      accion: 'ELIMINAR',
      entidad: 'PLANTILLA_SALIDA',
      entidadId: id,
      descripcion: 'Eliminó un horario recurrente',
    });
    return resultado;
  }
}



