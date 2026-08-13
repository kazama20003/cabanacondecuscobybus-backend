import { EstadoSalida, Prisma, TipoMedio } from '@prisma/client';
interface ParadaEntrada {
    nombre: string;
    latitud: number;
    longitud: number;
    minutos: number;
    duracionParadaMinutos?: number;
    descripcion?: string;
}
interface MedioEntrada {
    url: string;
    textoAlterno?: string;
    tipo?: TipoMedio;
}
import { PaginacionDto } from '../../../compartido/paginacion';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
import { TraduccionService } from '../../../compartido/traduccion/traduccion.service';
interface ContenidoEntrada {
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string;
}
export declare class CatalogoService {
    private readonly prisma;
    private readonly traduccion;
    constructor(prisma: PrismaService, traduccion: TraduccionService);
    listarTransportes(paginacion: PaginacionDto, origen?: string, destino?: string): Promise<import("../../../compartido/paginacion").Paginado<{
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: Prisma.Decimal;
            longitud: Prisma.Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        salidas: {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            transporteId: string;
            vehiculoId: string | null;
            fechaHoraLlegada: Date | null;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: Prisma.Decimal;
            precioUsd: Prisma.Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            transporteId: string;
            descripcion: string;
            titulo: string;
            resumen: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        origenNombre: string;
        destinoNombre: string;
        slug: string;
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    }>>;
    obtenerTransporte(slug: string, idioma: string): Promise<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import("@prisma/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: Prisma.Decimal;
            longitud: Prisma.Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            transporteId: string;
            descripcion: string;
            titulo: string;
            resumen: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        origenNombre: string;
        destinoNombre: string;
        slug: string;
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    }>;
    listarTours(paginacion: PaginacionDto, destino?: string): Promise<import("../../../compartido/paginacion").Paginado<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import("@prisma/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        salidas: {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: Prisma.Decimal;
            precioUsd: Prisma.Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
            tourId: string;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            descripcion: string;
            tourId: string;
            titulo: string;
            resumen: string;
            queLlevar: string | null;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        destinoNombre: string;
        slug: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>>;
    obtenerTour(slug: string, idioma: string): Promise<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import("@prisma/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            descripcion: string;
            tourId: string;
            titulo: string;
            resumen: string;
            queLlevar: string | null;
        }[];
        itinerarios: {
            id: string;
            orden: number;
            latitud: Prisma.Decimal | null;
            longitud: Prisma.Decimal | null;
            descripcion: string;
            tourId: string;
            titulo: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        destinoNombre: string;
        slug: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>;
    buscarSalidasTransporte(origen: string, destino: string, fecha: Date, pasajeros: number): Prisma.PrismaPromise<({
        transporte: {
            paradas: {
                id: string;
                orden: number;
                transporteId: string;
                nombre: string;
                latitud: Prisma.Decimal;
                longitud: Prisma.Decimal;
                minutos: number;
                duracionParadaMinutos: number;
                descripcion: string | null;
            }[];
            traducciones: {
                id: string;
                estado: import("@prisma/client").$Enums.EstadoTraduccion;
                idioma: string;
                transporteId: string;
                descripcion: string;
                titulo: string;
                resumen: string;
            }[];
        } & {
            id: string;
            activo: boolean;
            creadoEn: Date;
            actualizadoEn: Date;
            origenNombre: string;
            destinoNombre: string;
            slug: string;
            origenLatitud: Prisma.Decimal;
            origenLongitud: Prisma.Decimal;
            destinoLatitud: Prisma.Decimal;
            destinoLongitud: Prisma.Decimal;
            duracionMinutosEstimada: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
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
        paradas?: ParadaEntrada[];
        medios?: MedioEntrada[];
        contenido?: ContenidoEntrada;
    }): Promise<({
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import("@prisma/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: Prisma.Decimal;
            longitud: Prisma.Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            transporteId: string;
            descripcion: string;
            titulo: string;
            resumen: string;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        origenNombre: string;
        destinoNombre: string;
        slug: string;
        origenLatitud: Prisma.Decimal;
        origenLongitud: Prisma.Decimal;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutosEstimada: number;
    }) | null>;
    private crearTransporteBase;
    crearTour(datos: {
        slug: string;
        destinoNombre: string;
        destinoLatitud: number;
        destinoLongitud: number;
        duracionMinutos: number;
        requiereGuia?: boolean;
        medios?: MedioEntrada[];
        contenido?: ContenidoEntrada;
    }): Promise<({
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import("@prisma/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import("@prisma/client").$Enums.EstadoTraduccion;
            idioma: string;
            descripcion: string;
            tourId: string;
            titulo: string;
            resumen: string;
            queLlevar: string | null;
        }[];
    } & {
        id: string;
        activo: boolean;
        creadoEn: Date;
        actualizadoEn: Date;
        destinoNombre: string;
        slug: string;
        destinoLatitud: Prisma.Decimal;
        destinoLongitud: Prisma.Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }) | null>;
    private crearTourBase;
    definirItinerario(tourId: string, items: {
        titulo: string;
        descripcion: string;
        latitud?: number;
        longitud?: number;
    }[]): Promise<{
        id: string;
        orden: number;
        latitud: Prisma.Decimal | null;
        longitud: Prisma.Decimal | null;
        descripcion: string;
        tourId: string;
        titulo: string;
    }[]>;
    listarSalidasAdmin(paginacion: PaginacionDto, tipo: 'TRANSPORTE' | 'TOUR'): Promise<import("../../../compartido/paginacion").Paginado<{
        ocupados: number;
        reservas: undefined;
        transporte: {
            origenNombre: string;
            destinoNombre: string;
            slug: string;
        };
        vehiculo: {
            id: string;
            activo: boolean;
            creadoEn: Date;
            capacidad: number;
            placa: string;
            tipoPropiedad: import("@prisma/client").$Enums.TipoVehiculo;
            proveedor: string | null;
        } | null;
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
    }> | import("../../../compartido/paginacion").Paginado<{
        ocupados: number;
        reservas: undefined;
        tour: {
            destinoNombre: string;
            slug: string;
        };
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }>>;
    actualizarSalida(tipo: 'TRANSPORTE' | 'TOUR', id: string, cambios: {
        estado?: EstadoSalida;
        vehiculoId?: string | null;
        capacidad?: number;
        precioPen?: number;
        precioUsd?: number;
        fechaHoraSalida?: Date;
    }): Promise<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
    } | {
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }>;
    private generarTraducciones;
    listarTraducciones(tipo: 'transporte' | 'tour', id: string): Prisma.PrismaPromise<{
        id: string;
        estado: import("@prisma/client").$Enums.EstadoTraduccion;
        idioma: string;
        transporteId: string;
        descripcion: string;
        titulo: string;
        resumen: string;
    }[]> | Prisma.PrismaPromise<{
        id: string;
        estado: import("@prisma/client").$Enums.EstadoTraduccion;
        idioma: string;
        descripcion: string;
        tourId: string;
        titulo: string;
        resumen: string;
        queLlevar: string | null;
    }[]>;
    guardarTraduccion(tipo: 'transporte' | 'tour', id: string, idioma: string, contenido: Partial<ContenidoEntrada> & {
        titulo?: string;
        resumen?: string;
        descripcion?: string;
        queLlevar?: string;
    }, estado?: 'BORRADOR' | 'PUBLICADA'): Prisma.Prisma__TraduccionTransporteClient<{
        id: string;
        estado: import("@prisma/client").$Enums.EstadoTraduccion;
        idioma: string;
        transporteId: string;
        descripcion: string;
        titulo: string;
        resumen: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions> | Prisma.Prisma__TraduccionTourClient<{
        id: string;
        estado: import("@prisma/client").$Enums.EstadoTraduccion;
        idioma: string;
        descripcion: string;
        tourId: string;
        titulo: string;
        resumen: string;
        queLlevar: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
    definirParadas(transporteId: string, paradas: {
        nombre: string;
        latitud: number;
        longitud: number;
        minutos: number;
        duracionParadaMinutos?: number;
        descripcion?: string;
    }[]): Promise<{
        id: string;
        orden: number;
        transporteId: string;
        nombre: string;
        latitud: Prisma.Decimal;
        longitud: Prisma.Decimal;
        minutos: number;
        duracionParadaMinutos: number;
        descripcion: string | null;
    }[]>;
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
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
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
        estado: import("@prisma/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: Prisma.Decimal;
        precioUsd: Prisma.Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, Prisma.PrismaClientOptions>;
}
export {};
