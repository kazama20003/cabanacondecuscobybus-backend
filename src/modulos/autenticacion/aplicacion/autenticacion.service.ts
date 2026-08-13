import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

@Injectable()
export class AutenticacionService {
  private readonly clienteGoogle: OAuth2Client;
  private readonly googleClientId: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    configuracion: ConfigService,
  ) {
    this.googleClientId = configuracion.getOrThrow<string>('GOOGLE_CLIENT_ID');
    this.clienteGoogle = new OAuth2Client(this.googleClientId);
  }

  async registrar(datos: {
    correo: string;
    contrasena: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string;
    paisResidencia?: string;
  }) {
    const existe = await this.prisma.usuario.findUnique({
      where: { correo: datos.correo.toLowerCase() },
    });
    if (existe) throw new ConflictException('El correo ya está registrado');

    const usuario = await this.prisma.usuario.create({
      data: {
        correo: datos.correo.toLowerCase(),
        contrasenaHash: await bcrypt.hash(datos.contrasena, 12),
        nombres: datos.nombres,
        apellidos: datos.apellidos,
        telefonoWhatsApp: datos.telefonoWhatsApp,
        paisResidencia: datos.paisResidencia,
      },
    });
    return this.respuestaSesion(usuario);
  }

  async iniciarSesion(correo: string, contrasena: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo: correo.toLowerCase() },
    });
    if (
      !usuario ||
      !usuario.activo ||
      !usuario.contrasenaHash ||
      !(await bcrypt.compare(contrasena, usuario.contrasenaHash))
    ) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    return this.respuestaSesion(usuario);
  }

  async iniciarSesionGoogle(idToken: string) {
    let carga;
    try {
      const ticket = await this.clienteGoogle.verifyIdToken({
        idToken,
        audience: this.googleClientId,
      });
      carga = ticket.getPayload();
    } catch {
      throw new UnauthorizedException('Token de Google inválido');
    }
    if (!carga?.sub || !carga.email || carga.email_verified !== true) {
      throw new UnauthorizedException(
        'La cuenta de Google no tiene un correo verificado',
      );
    }

    const correo = carga.email.toLowerCase();
    let usuario = await this.prisma.usuario.findUnique({
      where: { googleId: carga.sub },
    });

    if (!usuario) {
      const porCorreo = await this.prisma.usuario.findUnique({
        where: { correo },
      });
      if (porCorreo) {
        // Cuenta existente con el mismo correo: se vincula con Google
        usuario = await this.prisma.usuario.update({
          where: { id: porCorreo.id },
          data: { googleId: carga.sub },
        });
      } else {
        usuario = await this.prisma.usuario.create({
          data: {
            correo,
            googleId: carga.sub,
            nombres: carga.given_name ?? carga.name ?? 'Usuario',
            apellidos: carga.family_name ?? '',
          },
        });
      }
    }

    if (!usuario.activo) {
      throw new UnauthorizedException('La cuenta está desactivada');
    }
    return this.respuestaSesion(usuario);
  }

  async perfil(id: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        correo: true,
        nombres: true,
        apellidos: true,
        telefonoWhatsApp: true,
        paisResidencia: true,
        rol: true,
      },
    });
    if (!usuario) throw new UnauthorizedException();
    return usuario;
  }

  private respuestaSesion(usuario: {
    id: string;
    correo: string;
    rol: string;
  }) {
    return {
      tokenAcceso: this.jwt.sign({
        sub: usuario.id,
        correo: usuario.correo,
        rol: usuario.rol,
      }),
      usuario: { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
    };
  }
}
