import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { AutenticacionService } from '../aplicacion/autenticacion.service';
import { GuardiaJwt } from '../presentacion/guardia-jwt';
import { UsuarioActual } from '../presentacion/usuario-actual';

class RegistroDto {
  @IsEmail() correo: string;
  @IsString() @MinLength(8) contrasena: string;
  @IsString() nombres: string;
  @IsString() apellidos: string;
  @IsOptional() @IsString() telefonoWhatsApp?: string;
  @IsOptional() @IsString() paisResidencia?: string;
}
class InicioSesionDto {
  @IsEmail() correo: string;
  @IsString() contrasena: string;
}

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly servicio: AutenticacionService) {}

  @Post('registro') registrar(@Body() datos: RegistroDto) {
    return this.servicio.registrar(datos);
  }
  @Post('inicio-sesion') iniciarSesion(@Body() datos: InicioSesionDto) {
    return this.servicio.iniciarSesion(datos.correo, datos.contrasena);
  }
  @Get('mi-perfil') @UseGuards(GuardiaJwt) perfil(
    @UsuarioActual() usuario: { id: string },
  ) {
    return this.servicio.perfil(usuario.id);
  }
}
