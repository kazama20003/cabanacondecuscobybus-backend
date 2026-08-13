import { ArchivosService } from '../aplicacion/archivos.service';
declare class CrearCargaImagenDto {
    nombreArchivo: string;
    tipoContenido: string;
    categoria: string;
}
export declare class ArchivosController {
    private readonly servicio;
    constructor(servicio: ArchivosService);
    crearCargaImagen(datos: CrearCargaImagenDto): Promise<{
        clave: string;
        urlCarga: string;
        urlPublica: string;
        venceEnSegundos: number;
    }>;
}
export {};
