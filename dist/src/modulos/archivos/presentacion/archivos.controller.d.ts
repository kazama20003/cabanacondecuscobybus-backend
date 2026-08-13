import { ArchivosService } from '../aplicacion/archivos.service';
declare class CrearCargaDto {
    nombreArchivo: string;
    tipoContenido: string;
    categoria: string;
}
export declare class ArchivosController {
    private readonly servicio;
    constructor(servicio: ArchivosService);
    crearCarga(datos: CrearCargaDto): Promise<{
        clave: string;
        tipo: string;
        urlCarga: string;
        urlPublica: string;
        venceEnSegundos: number;
    }>;
    crearCargaImagen(datos: CrearCargaDto): Promise<{
        clave: string;
        tipo: string;
        urlCarga: string;
        urlPublica: string;
        venceEnSegundos: number;
    }>;
}
export {};
