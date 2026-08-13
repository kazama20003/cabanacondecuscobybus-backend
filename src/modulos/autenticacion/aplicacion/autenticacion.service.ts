import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

@Injectable()
export class AutenticacionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

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
      !(await bcrypt.compare(contrasena, usuario.contrasenaHash))
    ) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
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
