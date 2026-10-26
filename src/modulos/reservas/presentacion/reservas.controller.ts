import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsArray,
  ArrayMaxSize,
  ArrayNotEmpty,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsIn,
  IsOptional,
  IsString,
  Equals,
  ValidateIf,
  IsUrl,
  IsUUID,
  Matches,
  Max,
  Min,
  MinLength,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { EstadoPago, MetodoPago, Moneda } from '@prisma/client';
import { GuardiaAdministrador } from '../../autenticacion/presentacion/guardia-administrador';
import { GuardiaJwt } from '../../autenticacion/presentacion/guardia-jwt';
import { UsuarioActual } from '../../autenticacion/presentacion/usuario-actual';
import { ReservasService } from '../aplicacion/reservas.service';

class PasajeroDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(1) @MaxLength(100) nombres: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(1) @MaxLength(100) apellidos: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(2) @MaxLength(60) nacionalidad: string;
  @IsIn(['DNI', 'PASAPORTE', 'CE']) tipoDocumento: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(3) @MaxLength(40) numeroDocumento: string;
}
class CrearReservaDto {
  @IsIn(['TRANSPORTE', 'TOUR']) tipoServicio: 'TRANSPORTE' | 'TOUR';
  @IsString() @IsUUID() salidaId: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsEmail() @MaxLength(254) correoContacto: string;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @Matches(/^\+?[0-9().\s-]{6,30}$/) telefonoWhatsApp: string;
  @IsOptional() @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MaxLength(80) paisResidencia?: string;
  @IsEnum(Moneda) moneda: Moneda;
  @IsArray() @ArrayNotEmpty() @ArrayMaxSize(30)
  @ValidateNested({ each: true })
  @Type(() => PasajeroDto)
  pasajeros: PasajeroDto[];
  @IsOptional() @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MaxLength(60) codigoPromocion?: string;
  @IsBoolean() @Equals(true) aceptaPoliticas: boolean;
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(1) @MaxLength(50) versionPoliticas: string;
}
class ComprobanteSaldoDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(3) @MaxLength(100) codigoOperacion: string;
  @IsUrl({ require_protocol: true, protocols: ['https'] }) @MaxLength(2048) urlComprobante: string;
  @IsIn([MetodoPago.TRANSFERENCIA, MetodoPago.EFECTIVO_OFICINA]) metodo: MetodoPago;
}
class SolicitudGestionReservaDto {
  @IsIn(['CANCELACION', 'REPROGRAMACION']) tipo: 'CANCELACION' | 'REPROGRAMACION';
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString() @MinLength(5) @MaxLength(1000) motivo: string;
  @ValidateIf((o: SolicitudGestionReservaDto) => o.tipo === 'REPROGRAMACION')
  @IsDateString({ strict: true }) fechaPreferida?: string;
}
class FiltrosPagosAdminDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) pagina?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) porPagina?: number;
  @IsOptional() @IsEnum(EstadoPago) estado?: EstadoPago;
  @IsOptional() @IsEnum(MetodoPago) metodo?: MetodoPago;
  @IsOptional() @IsString() @MaxLength(40) codigoReserva?: string;
}

@Controller('reservas')
export class ReservasController {
  constructor(
    private readonly servicio: ReservasService,
    private readonly guardiaJwt: GuardiaJwt,
  ) {}

  @Post()
  crear(
    @Body() datos: CrearReservaDto,
    @Req()
    solicitud: {
      headers: Record<string, string>;
      usuario?: { id: string };
    },
  ) {
    return this.servicio.crear({ ...datos, usuarioId: this.usuarioOpcional(solicitud) });
  }

  /** Reservas del turista logueado (perfil de cliente). */
  @Get('mias')
  @UseGuards(GuardiaJwt)
  misReservas(@UsuarioActual() usuario: { id: string }) {
    return this.servicio.misReservas(usuario.id);
  }

  @Get(':codigo') verInvitado(
    @Param('codigo') codigo: string,
    @Query('token') token: string,
  ) {
    return this.servicio.verInvitado(codigo, token);
  }
  @Post(':codigo/iniciar-pago-adelanto') iniciarPago(
    @Param('codigo') codigo: string,
    @Query('token') token: string | undefined,
    @Req() solicitud: { headers: Record<string, string>; usuario?: { id: string } },
  ) {
    return this.servicio.iniciarPagoAdelanto(codigo, token, this.usuarioOpcional(solicitud));
  }
  @Post(':codigo/comprobantes-saldo') subirComprobante(
    @Param('codigo') codigo: string,
    @Query('token') token: string,
    @Body() datos: ComprobanteSaldoDto,
    @Req() solicitud: { headers: Record<string, string>; usuario?: { id: string } },
  ) {
    return this.servicio.registrarComprobanteSaldo(codigo, token, this.usuarioOpcional(solicitud), datos);
  }
  @Post(':codigo/solicitudes-gestion') solicitarGestion(
    @Param('codigo') codigo: string,
    @Query('token') token: string,
    @Body() datos: SolicitudGestionReservaDto,
    @Req() solicitud: { headers: Record<string, string>; usuario?: { id: string } },
  ) {
    return this.servicio.solicitarGestionReserva(codigo, token, this.usuarioOpcional(solicitud), datos);
  }
  @Get('administracion/pagos')
  @UseGuards(GuardiaAdministrador)
  listarPagosAdministracion(@Query() filtros: FiltrosPagosAdminDto) {
    return this.servicio.listarPagosAdministracion(filtros);
  }
  @Post('administracion/pagos/:pagoId/confirmar')
  @UseGuards(GuardiaAdministrador)
  confirmarPago(
    @Param('pagoId') pagoId: string,
    @UsuarioActual() usuario: { id: string },
  ) {
    return this.servicio.confirmarPago(pagoId, usuario.id);
  }

  private usuarioOpcional(solicitud: { headers: Record<string, string>; usuario?: { id: string } }) {
    if (!solicitud.headers.authorization) return undefined;
    this.guardiaJwt.canActivate({
      switchToHttp: () => ({ getRequest: () => solicitud }),
    } as Parameters<GuardiaJwt['canActivate']>[0]);
    return solicitud.usuario?.id;
  }
}
