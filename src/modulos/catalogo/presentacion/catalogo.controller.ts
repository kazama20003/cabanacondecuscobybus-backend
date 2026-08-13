import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  IsDateString,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { GuardiaAdministrador } from '../../autenticacion/presentacion/guardia-administrador';
import { CatalogoService } from '../aplicacion/catalogo.service';

class CrearTransporteDto {
  @IsString() slug: string;
  @IsString() origenNombre: string;
  @IsLatitude() origenLatitud: number;
  @IsLongitude() origenLongitud: number;
  @IsString() destinoNombre: string;
  @IsLatitude() destinoLatitud: number;
  @IsLongitude() destinoLongitud: number;
  @IsInt() @Min(1) duracionMinutosEstimada: number;
}
class CrearTourDto {
  @IsString() slug: string;
  @IsString() destinoNombre: string;
  @IsLatitude() destinoLatitud: number;
  @IsLongitude() destinoLongitud: number;
  @IsInt() @Min(1) duracionMinutos: number;
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
  @Get('transportes') transportes(
    @Query('origen') origen?: string,
    @Query('destino') destino?: string,
  ) {
    return this.servicio.listarTransportes(origen, destino);
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
  @Get('tours') tours(@Query('destino') destino?: string) {
    return this.servicio.listarTours(destino);
  }
  @Get('tours/:slug') tour(
    @Param('slug') slug: string,
    @Query('idioma') idioma = 'es',
  ) {
    return this.servicio.obtenerTour(slug, idioma);
  }

  @Post('administracion/transportes')
  @UseGuards(GuardiaAdministrador)
  crearTransporte(@Body() datos: CrearTransporteDto) {
    return this.servicio.crearTransporte(datos);
  }
  @Post('administracion/tours') @UseGuards(GuardiaAdministrador) crearTour(
    @Body() datos: CrearTourDto,
  ) {
    return this.servicio.crearTour(datos);
  }
  @Post('administracion/transportes/:id/salidas')
  @UseGuards(GuardiaAdministrador)
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
  @UseGuards(GuardiaAdministrador)
  crearSalidaTour(@Param('id') tourId: string, @Body() datos: CrearSalidaDto) {
    return this.servicio.crearSalidaTour({
      ...datos,
      tourId,
      fechaHoraSalida: new Date(datos.fechaHoraSalida),
    });
  }
}
