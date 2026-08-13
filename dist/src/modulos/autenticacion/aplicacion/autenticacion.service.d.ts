import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
export declare class AutenticacionService {
    private readonly prisma;
    private readonly jwt;
    private readonly clienteGoogle;
    private readonly googleClientId;
    constructor(prisma: PrismaService, jwt: JwtService, configuracion: ConfigService);
    registrar(datos: {
        correo: string;
        contrasena: string;
        nombres: string;
        apellidos: string;
        telefonoWhatsApp?: string;
        paisResidencia?: string;
    }): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    iniciarSesion(correo: string, contrasena: string): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    iniciarSesionGoogle(idToken: string): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    perfil(id: string): Promise<{
        id: string;
        correo: string;
        nombres: string;
        apellidos: string;
        telefonoWhatsApp: string | null;
        paisResidencia: string | null;
        rol: import("@prisma/client").$Enums.RolUsuario;
    }>;
    private respuestaSesion;
}
