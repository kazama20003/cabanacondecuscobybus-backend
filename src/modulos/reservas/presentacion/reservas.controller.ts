import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MetodoPago, Moneda } from '@prisma/client';
import { GuardiaAdministrador } from '../../autenticacion/presentacion/guardia-administrador';
import { UsuarioActual } from '../../autenticacion/presentacion/usuario-actual';
import { ReservasService } from '../aplicacion/reservas.service';

class PasajeroDto {
  @IsString() nombres: string;
  @IsString() apellidos: string;
  @IsString() nacionalidad: string;
  @IsString() tipoDocumento: string;
  @IsString() numeroDocumento: string;
}
class CrearReservaDto {
  @IsEnum(['TRANSPORTE', 'TOUR']) tipoServicio: 'TRANSPORTE' | 'TOUR';
  @IsString() salidaId: string;
  @IsEmail() correoContacto: string;
  @IsString() telefonoWhatsApp: string;
  @IsOptional() @IsString() paisResidencia?: string;
  @IsEnum(Moneda) moneda: Moneda;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PasajeroDto)
  pasajeros: PasajeroDto[];
}
class ComprobanteSaldoDto {
  @IsString() codigoOperacion: string;
  @IsString() urlComprobante: string;
  @IsEnum(MetodoPago) metodo: MetodoPago;
}

@Controller('reservas')
export class ReservasController {
  constructor(private readonly servicio: ReservasService) {}
  @Post() crear(@Body() datos: CrearReservaDto) {
    return this.servicio.crear(datos);
  }
  @Get(':codigo') verInvitado(
    @Param('codigo') codigo: string,
    @Query('token') token: string,
  ) {
    return this.servicio.verInvitado(codigo, token);
  }
  @Post(':codigo/iniciar-pago-adelanto') iniciarPago(
    @Param('codigo') codigo: string,
  ) {
    return this.servicio.iniciarPagoAdelanto(codigo);
  }
  @Post(':codigo/comprobantes-saldo') subirComprobante(
    @Param('codigo') codigo: string,
    @Query('token') token: string,
    @Body() datos: ComprobanteSaldoDto,
  ) {
    return this.servicio.registrarComprobanteSaldo(codigo, token, datos);
  }
  @Post('administracion/pagos/:pagoId/confirmar')
  @UseGuards(GuardiaAdministrador)
  confirmarPago(
    @Param('pagoId') pagoId: string,
    @UsuarioActual() usuario: { id: string },
  ) {
    return this.servicio.confirmarPago(pagoId, usuario.id);
  }
}
