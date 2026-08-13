import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
export declare class CatalogoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listarTransportes(origen?: string, destino?: string): Prisma.PrismaPromise<({
        paradas: {
            id: string;
            transporteId: string;
            orden: number;
            nombre: string;
            latitud: Prisma.Decimal;
            longitud: Prisma.Decimal;
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
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoNombre: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    })[]>;
    obtenerTransporte(slug: string, idioma: string): Promise<{
        paradas: {
            id: string;
            transporteId: string;
            orden: number;
            nombre: string;
            latitud: Prisma.Decimal;
            longitud: Prisma.Decimal;
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
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoNombre: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    }>;
    listarTours(destino?: string): Prisma.PrismaPromise<({
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
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    })[]>;
    obtenerTour(slug: string, idioma: string): Promise<{
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
            latitud: Prisma.Decimal | null;
            longitud: Prisma.Decimal | null;
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
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>;
    buscarSalidasTransporte(origen: string, destino: string, fecha: Date, pasajeros: number): Prisma.PrismaPromise<({
        transporte: {
            paradas: {
                id: string;
                transporteId: string;
                orden: number;
                nombre: string;
                latitud: Prisma.Decimal;
                longitud: Prisma.Decimal;
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
            origenLatitud: Prisma.Decimal;
            origenLongitud: Prisma.Decimal;
            destinoNombre: string;
            destinoLatitud: Prisma.Decimal;
            destinoLongitud: Prisma.Decimal;
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
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    })[]>;
    crearTransporte(datos: {
        slug: string;
        origenNombre: string;
        origenLatitud: number;
        origenLongitud: number;
        destinoNombre: string;
        destinoLatitud: number;
        destinoLongitud: number;
        duracionMinutosEstimada: number;
    }): Prisma.Prisma__TransporteClient<{
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        origenNombre: string;
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoNombre: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    crearTour(datos: {
        slug: string;
        destinoNombre: string;
        destinoLatitud: number;
        destinoLongitud: number;
        duracionMinutos: number;
        requiereGuia?: boolean;
    }): Prisma.Prisma__TourClient<{
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        slug: string;
        destinoNombre: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    crearSalidaTransporte(datos: {
        transporteId: string;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros?: number;
        precioPen: number;
        precioUsd: number;
    }): Prisma.Prisma__SalidaTransporteClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        transporteId: string;
        capacidad: number;
        vehiculoId: string | null;
        fechaHoraSalida: Date;
        fechaHoraLlegada: Date | null;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    crearSalidaTour(datos: {
        tourId: string;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros?: number;
        precioPen: number;
        precioUsd: number;
    }): Prisma.Prisma__SalidaTourClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        tourId: string;
        capacidad: number;
        fechaHoraSalida: Date;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        estado: import("@prisma/client").$Enums.EstadoSalida;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
