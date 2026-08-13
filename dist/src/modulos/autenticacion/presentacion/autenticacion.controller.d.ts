import { AutenticacionService } from '../aplicacion/autenticacion.service';
declare class RegistroDto {
    correo: string;
    contrasena: string;
    nombres: string;
    apellidos: string;
    telefonoWhatsApp?: string;
    paisResidencia?: string;
}
declare class InicioSesionDto {
    correo: string;
    contrasena: string;
}
declare class InicioSesionGoogleDto {
    idToken: string;
}
export declare class AutenticacionController {
    private readonly servicio;
    constructor(servicio: AutenticacionService);
    registrar(datos: RegistroDto): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    iniciarSesion(datos: InicioSesionDto): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    iniciarSesionGoogle(datos: InicioSesionGoogleDto): Promise<{
        tokenAcceso: string;
        usuario: {
            id: string;
            correo: string;
            rol: string;
        };
    }>;
    perfil(usuario: {
        id: string;
    }): Promise<{
        id: string;
        correo: string;
        nombres: string;
        apellidos: string;
        telefonoWhatsApp: string | null;
        paisResidencia: string | null;
        rol: import(".prisma/client/client").$Enums.RolUsuario;
    }>;
}
export {};
