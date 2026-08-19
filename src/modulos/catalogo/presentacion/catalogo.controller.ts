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
import { PaginacionDto } from '../../../compartido/paginacion';
import { Roles } from '../../autenticacion/presentacion/roles';
import { CatalogoService } from '../aplicacion/catalogo.service';

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
}
class EditarTraduccionDto {
  @IsOptional() @IsString() titulo?: string;
  @IsOptional() @IsString() resumen?: string;
  @IsOptional() @IsString() descripcion?: string;
  @IsOptional() @IsString() queLlevar?: string;
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

@Controller()
export class CatalogoController {
  constructor(private readonly servicio: CatalogoService) {}
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
  crearTransporte(@Body() datos: CrearTransporteDto) {
    return this.servicio.crearTransporte(datos);
  }
  @Post('administracion/tours') @Roles('ADMINISTRADOR', 'OPERADOR') crearTour(
    @Body() datos: CrearTourDto,
  ) {
    return this.servicio.crearTour(datos);
  }
  @Delete('administracion/transportes/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  eliminarTransporte(@Param('id') id: string) {
    return this.servicio.eliminarTransporte(id);
  }
  @Delete('administracion/tours/:id')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  eliminarTour(@Param('id') id: string) {
    return this.servicio.eliminarTour(id);
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
  actualizarSalida(
    @Param('tipoSalida') tipoSalida: string,
    @Param('id') id: string,
    @Body() cambios: ActualizarSalidaDto,
  ) {
    return this.servicio.actualizarSalida(
      tipoSalida === 'tour' ? 'TOUR' : 'TRANSPORTE',
      id,
      {
        ...cambios,
        fechaHoraSalida: cambios.fechaHoraSalida
          ? new Date(cambios.fechaHoraSalida)
          : undefined,
      },
    );
  }
  @Post('administracion/transportes/:id/paradas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  definirParadas(@Param('id') transporteId: string, @Body() datos: DefinirParadasDto) {
    return this.servicio.definirParadas(transporteId, datos.paradas);
  }
  @Post('administracion/transportes/:id/salidas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  crearSalidaTransporte(
    @Param('id') transporteId: string,
    @Body() datos: CrearSalidaDto,
  ) {
    return this.servicio.crearSalidaTransporte({
      ...datos,
      transporteId,
      fechaHoraSalida: new Date(datos.fechaHoraSalida),
    });
  }
  @Post('administracion/tours/:id/salidas')
  @Roles('ADMINISTRADOR', 'OPERADOR')
  crearSalidaTour(@Param('id') tourId: string, @Body() datos: CrearSalidaDto) {
    return this.servicio.crearSalidaTour({
      ...datos,
      tourId,
      fechaHoraSalida: new Date(datos.fechaHoraSalida),
    });
  }
}



