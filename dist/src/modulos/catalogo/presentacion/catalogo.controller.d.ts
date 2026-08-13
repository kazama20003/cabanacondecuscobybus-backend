import { CatalogoService } from '../aplicacion/catalogo.service';
declare class CrearTransporteDto {
    slug: string;
    origenNombre: string;
    origenLatitud: number;
    origenLongitud: number;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutosEstimada: number;
}
declare class CrearTourDto {
    slug: string;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutos: number;
}
declare class CrearSalidaDto {
    fechaHoraSalida: string;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: number;
    precioUsd: number;
}
export declare class CatalogoController {
    private readonly servicio;
    constructor(servicio: CatalogoService);
    transportes(origen?: string, destino?: string): import("@prisma/client").Prisma.PrismaPromise<({
        paradas: {
            id: string;
            transporteId: string;
            orden: number;
            nombre: string;
            latitud: import("@prisma/client-runtime-utils").Decimal;
            longitud: import("@prisma/client-runtime-utils").Decimal;
            minutos: number;
        }[];
        traducciones: {
            id: string;
            transporteId: string;
            titulo: string;
            descripcion: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            resumen: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        origenNombre: string;
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    })[]>;
    buscar(origen: string, destino: string, fecha: string, pasajeros: string): import("@prisma/client").Prisma.PrismaPromise<({
        transporte: {
            paradas: {
                id: string;
                transporteId: string;
                orden: number;
                nombre: string;
                latitud: import("@prisma/client-runtime-utils").Decimal;
                longitud: import("@prisma/client-runtime-utils").Decimal;
                minutos: number;
            }[];
            traducciones: {
                id: string;
                transporteId: string;
                titulo: string;
                descripcion: string;
                estado: import("@prisma/client").$Enums.EstadoTraduccion;
                idioma: string;
                resumen: string;
            }[];
        } & {
            id: string;
            activo: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
            slug: string;
            origenNombre: string;
            origenLatitud: import("@prisma/client-runtime-utils").Decimal;
            origenLongitud: import("@prisma/client-runtime-utils").Decimal;
            destinoNombre: string;
            destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
            destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
            duracionMinutosEstimada: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        transporteId: string;
        capacidad: number;
        vehiculoId: string | null;
        fechaHoraSalida: Date;
        fechaHoraLlegada: Date | null;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    })[]>;
    transporte(slug: string, idioma?: string): Promise<{
        paradas: {
            id: string;
            transporteId: string;
            orden: number;
            nombre: string;
            latitud: import("@prisma/client-runtime-utils").Decimal;
            longitud: import("@prisma/client-runtime-utils").Decimal;
            minutos: number;
        }[];
        traducciones: {
            id: string;
            transporteId: string;
            titulo: string;
            descripcion: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            resumen: string;
        }[];
        imagenes: {
            url: string;
            id: string;
            transporteId: string | null;
            orden: number;
            tourId: string | null;
            textoAlterno: string | null;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        origenNombre: string;
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    }>;
    tours(destino?: string): import("@prisma/client").Prisma.PrismaPromise<({
        traducciones: {
            id: string;
            tourId: string;
            titulo: string;
            descripcion: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            resumen: string;
            queLlevar: string | null;
        }[];
        imagenes: {
            url: string;
            id: string;
            transporteId: string | null;
            orden: number;
            tourId: string | null;
            textoAlterno: string | null;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    })[]>;
    tour(slug: string, idioma?: string): Promise<{
        traducciones: {
            id: string;
            tourId: string;
            titulo: string;
            descripcion: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            resumen: string;
            queLlevar: string | null;
        }[];
        imagenes: {
            url: string;
            id: string;
            transporteId: string | null;
            orden: number;
            tourId: string | null;
            textoAlterno: string | null;
        }[];
        itinerarios: {
            id: string;
            orden: number;
            latitud: import("@prisma/client-runtime-utils").Decimal | null;
            longitud: import("@prisma/client-runtime-utils").Decimal | null;
            tourId: string;
            titulo: string;
            descripcion: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>;
    crearTransporte(datos: CrearTransporteDto): import("@prisma/client").Prisma.Prisma__TransporteClient<{
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        origenNombre: string;
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    crearTour(datos: CrearTourDto): import("@prisma/client").Prisma.Prisma__TourClient<{
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        destinoNombre: string;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    crearSalidaTransporte(transporteId: string, datos: CrearSalidaDto): import("@prisma/client").Prisma.Prisma__SalidaTransporteClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        transporteId: string;
        capacidad: number;
        vehiculoId: string | null;
        fechaHoraSalida: Date;
        fechaHoraLlegada: Date | null;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    crearSalidaTour(tourId: string, datos: CrearSalidaDto): import("@prisma/client").Prisma.Prisma__SalidaTourClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        tourId: string;
        capacidad: number;
        fechaHoraSalida: Date;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
export {};
