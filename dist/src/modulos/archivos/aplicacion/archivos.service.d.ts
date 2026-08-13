import { ConfigService } from '@nestjs/config';
export declare class ArchivosService {
    private readonly configuracion;
    constructor(configuracion: ConfigService);
    crearCargaImagen(nombreArchivo: string, tipoContenido: string, categoria: string): Promise<{
        clave: string;
        urlCarga: string;
        urlPublica: string;
        venceEnSegundos: number;
    }>;
}
