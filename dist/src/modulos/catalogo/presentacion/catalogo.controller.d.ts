import { PaginacionDto } from '../../../compartido/paginacion';
import { CatalogoService } from '../aplicacion/catalogo.service';
declare class FiltrosTransportesDto extends PaginacionDto {
    origen?: string;
    destino?: string;
}
declare class FiltrosToursDto extends PaginacionDto {
    destino?: string;
}
declare class ContenidoDto {
    titulo: string;
    resumen: string;
    descripcion: string;
    queLlevar?: string;
}
declare class EditarTraduccionDto {
    titulo?: string;
    resumen?: string;
    descripcion?: string;
    queLlevar?: string;
    estado?: 'BORRADOR' | 'PUBLICADA';
}
declare class MedioDto {
    url: string;
    textoAlterno?: string;
    tipo?: 'IMAGEN' | 'VIDEO';
}
declare class ParadaDto {
    nombre: string;
    latitud: number;
    longitud: number;
    minutos: number;
    duracionParadaMinutos?: number;
    descripcion?: string;
}
declare class CrearTransporteDto {
    slug: string;
    origenNombre: string;
    origenLatitud: number;
    origenLongitud: number;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutosEstimada: number;
    paradas?: ParadaDto[];
    medios?: MedioDto[];
    contenido?: ContenidoDto;
}
declare class CrearTourDto {
    slug: string;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutos: number;
    medios?: MedioDto[];
    contenido?: ContenidoDto;
}
declare class DefinirParadasDto {
    paradas: ParadaDto[];
}
declare class ItemItinerarioDto {
    titulo: string;
    descripcion: string;
    latitud?: number;
    longitud?: number;
}
declare class DefinirItinerarioDto {
    items: ItemItinerarioDto[];
}
declare class FiltrosSalidasDto extends PaginacionDto {
    tipo?: 'TRANSPORTE' | 'TOUR';
}
declare class ActualizarSalidaDto {
    estado?: 'BORRADOR' | 'A_LA_VENTA' | 'PENDIENTE_DE_MINIMO' | 'CONFIRMADA' | 'EN_CURSO' | 'FINALIZADA' | 'CANCELADA';
    vehiculoId?: string;
    capacidad?: number;
    precioPen?: number;
    precioUsd?: number;
    fechaHoraSalida?: string;
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
    transportes(filtros: FiltrosTransportesDto): Promise<import("../../../compartido/paginacion").Paginado<{
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: import("@prisma/client-runtime-utils").Decimal;
            longitud: import("@prisma/client-runtime-utils").Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        salidas: {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import(".prisma/client/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            transporteId: string;
            vehiculoId: string | null;
            fechaHoraLlegada: Date | null;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: import("@prisma/client-runtime-utils").Decimal;
            precioUsd: import("@prisma/client-runtime-utils").Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    }>>;
    buscar(origen: string, destino: string, fecha: string, pasajeros: string): import(".prisma/client/client").Prisma.PrismaPromise<({
        transporte: {
            paradas: {
                id: string;
                orden: number;
                transporteId: string;
                nombre: string;
                latitud: import("@prisma/client-runtime-utils").Decimal;
                longitud: import("@prisma/client-runtime-utils").Decimal;
                minutos: number;
                duracionParadaMinutos: number;
                descripcion: string | null;
            }[];
            traducciones: {
                id: string;
                estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
            origenLatitud: import("@prisma/client-runtime-utils").Decimal;
            origenLongitud: import("@prisma/client-runtime-utils").Decimal;
            destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
            destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
            duracionMinutosEstimada: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
    })[]>;
    transporte(slug: string, idioma?: string): Promise<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import(".prisma/client/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: import("@prisma/client-runtime-utils").Decimal;
            longitud: import("@prisma/client-runtime-utils").Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    }>;
    tours(filtros: FiltrosToursDto): Promise<import("../../../compartido/paginacion").Paginado<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import(".prisma/client/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        salidas: {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import(".prisma/client/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: import("@prisma/client-runtime-utils").Decimal;
            precioUsd: import("@prisma/client-runtime-utils").Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
            tourId: string;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>>;
    tour(slug: string, idioma?: string): Promise<{
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import(".prisma/client/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
            latitud: import("@prisma/client-runtime-utils").Decimal | null;
            longitud: import("@prisma/client-runtime-utils").Decimal | null;
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
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }>;
    crearTransporte(datos: CrearTransporteDto): Promise<({
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import(".prisma/client/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        paradas: {
            id: string;
            orden: number;
            transporteId: string;
            nombre: string;
            latitud: import("@prisma/client-runtime-utils").Decimal;
            longitud: import("@prisma/client-runtime-utils").Decimal;
            minutos: number;
            duracionParadaMinutos: number;
            descripcion: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
        origenLatitud: import("@prisma/client-runtime-utils").Decimal;
        origenLongitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutosEstimada: number;
    }) | null>;
    crearTour(datos: CrearTourDto): Promise<({
        imagenes: {
            id: string;
            orden: number;
            transporteId: string | null;
            url: string;
            textoAlterno: string | null;
            tipo: import(".prisma/client/client").$Enums.TipoMedio;
            tourId: string | null;
        }[];
        traducciones: {
            id: string;
            estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
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
        destinoLatitud: import("@prisma/client-runtime-utils").Decimal;
        destinoLongitud: import("@prisma/client-runtime-utils").Decimal;
        duracionMinutos: number;
        requiereGuia: boolean;
    }) | null>;
    listarTraducciones(tipo: string, id: string): import(".prisma/client/client").Prisma.PrismaPromise<{
        id: string;
        estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
        idioma: string;
        transporteId: string;
        descripcion: string;
        titulo: string;
        resumen: string;
    }[]> | import(".prisma/client/client").Prisma.PrismaPromise<{
        id: string;
        estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
        idioma: string;
        descripcion: string;
        tourId: string;
        titulo: string;
        resumen: string;
        queLlevar: string | null;
    }[]>;
    editarTraduccion(tipo: string, id: string, idioma: string, datos: EditarTraduccionDto): import(".prisma/client/client").Prisma.Prisma__TraduccionTransporteClient<{
        id: string;
        estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
        idioma: string;
        transporteId: string;
        descripcion: string;
        titulo: string;
        resumen: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client/client").Prisma.PrismaClientOptions> | import(".prisma/client/client").Prisma.Prisma__TraduccionTourClient<{
        id: string;
        estado: import(".prisma/client/client").$Enums.EstadoTraduccion;
        idioma: string;
        descripcion: string;
        tourId: string;
        titulo: string;
        resumen: string;
        queLlevar: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client/client").Prisma.PrismaClientOptions>;
    definirItinerario(tourId: string, datos: DefinirItinerarioDto): Promise<{
        id: string;
        orden: number;
        latitud: import("@prisma/client-runtime-utils").Decimal | null;
        longitud: import("@prisma/client-runtime-utils").Decimal | null;
        descripcion: string;
        tourId: string;
        titulo: string;
    }[]>;
    listarSalidas(filtros: FiltrosSalidasDto): Promise<import("../../../compartido/paginacion").Paginado<{
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
            tipoPropiedad: import(".prisma/client/client").$Enums.TipoVehiculo;
            proveedor: string | null;
        } | null;
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
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
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }>>;
    actualizarSalida(tipoSalida: string, id: string, cambios: ActualizarSalidaDto): Promise<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
    } | {
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }>;
    definirParadas(transporteId: string, datos: DefinirParadasDto): Promise<{
        id: string;
        orden: number;
        transporteId: string;
        nombre: string;
        latitud: import("@prisma/client-runtime-utils").Decimal;
        longitud: import("@prisma/client-runtime-utils").Decimal;
        minutos: number;
        duracionParadaMinutos: number;
        descripcion: string | null;
    }[]>;
    crearSalidaTransporte(transporteId: string, datos: CrearSalidaDto): import(".prisma/client/client").Prisma.Prisma__SalidaTransporteClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        transporteId: string;
        vehiculoId: string | null;
        fechaHoraLlegada: Date | null;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client/client").Prisma.PrismaClientOptions>;
    crearSalidaTour(tourId: string, datos: CrearSalidaDto): import(".prisma/client/client").Prisma.Prisma__SalidaTourClient<{
        id: string;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import(".prisma/client/client").$Enums.EstadoSalida;
        fechaHoraSalida: Date;
        capacidad: number;
        minimoPasajeros: number;
        precioPen: import("@prisma/client-runtime-utils").Decimal;
        precioUsd: import("@prisma/client-runtime-utils").Decimal;
        permiteAdelanto: boolean;
        porcentajeAdelanto: number;
        tourId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client/client").Prisma.PrismaClientOptions>;
}
export {};
