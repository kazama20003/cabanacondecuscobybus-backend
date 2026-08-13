import { MetodoPago, Moneda } from '@prisma/client';
import { GuardiaJwt } from '../../autenticacion/presentacion/guardia-jwt';
import { ReservasService } from '../aplicacion/reservas.service';
declare class PasajeroDto {
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
}
declare class CrearReservaDto {
    tipoServicio: 'TRANSPORTE' | 'TOUR';
    salidaId: string;
    correoContacto: string;
    telefonoWhatsApp: string;
    paisResidencia?: string;
    moneda: Moneda;
    pasajeros: PasajeroDto[];
    codigoPromocion?: string;
}
declare class ComprobanteSaldoDto {
    codigoOperacion: string;
    urlComprobante: string;
    metodo: MetodoPago;
}
export declare class ReservasController {
    private readonly servicio;
    private readonly guardiaJwt;
    constructor(servicio: ReservasService, guardiaJwt: GuardiaJwt);
    crear(datos: CrearReservaDto, solicitud: {
        headers: Record<string, string>;
        usuario?: {
            id: string;
        };
    }): Promise<{
        pasajeros: {
            id: string;
            nombres: string;
            apellidos: string;
            reservaId: string;
            nacionalidad: string;
            tipoDocumento: string;
            numeroDocumento: string;
        }[];
    } & {
        id: string;
        telefonoWhatsApp: string;
        paisResidencia: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoReserva;
        codigo: string;
        usuarioId: string | null;
        salidaTransporteId: string | null;
        salidaTourId: string | null;
        correoContacto: string;
        cantidadPasajeros: number;
        moneda: import("@prisma/client").$Enums.Moneda;
        montoTotal: import("@prisma/client-runtime-utils").Decimal;
        montoAdelanto: import("@prisma/client-runtime-utils").Decimal;
        montoSaldo: import("@prisma/client-runtime-utils").Decimal;
        promocionId: string | null;
        montoDescuento: import("@prisma/client-runtime-utils").Decimal;
        tokenGestionInvitado: string;
    }>;
    misReservas(usuario: {
        id: string;
    }): import("@prisma/client").Prisma.PrismaPromise<({
        salidaTransporte: ({
            transporte: {
                origenNombre: string;
                destinoNombre: string;
                slug: string;
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
            precioPen: import("@prisma/client-runtime-utils").Decimal;
            precioUsd: import("@prisma/client-runtime-utils").Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
        }) | null;
        salidaTour: ({
            tour: {
                destinoNombre: string;
                slug: string;
            };
        } & {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: import("@prisma/client-runtime-utils").Decimal;
            precioUsd: import("@prisma/client-runtime-utils").Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
            tourId: string;
        }) | null;
        promocion: {
            titulo: string;
            codigo: string | null;
        } | null;
        pasajeros: {
            id: string;
            nombres: string;
            apellidos: string;
            reservaId: string;
            nacionalidad: string;
            tipoDocumento: string;
            numeroDocumento: string;
        }[];
        pagos: {
            id: string;
            creadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoPago;
            moneda: import("@prisma/client").$Enums.Moneda;
            referenciaProveedor: string | null;
            reservaId: string;
            confirmadoPorId: string | null;
            monto: import("@prisma/client-runtime-utils").Decimal;
            metodo: import("@prisma/client").$Enums.MetodoPago;
            esAdelanto: boolean;
            codigoOperacion: string | null;
            urlComprobante: string | null;
            confirmadoEn: Date | null;
        }[];
    } & {
        id: string;
        telefonoWhatsApp: string;
        paisResidencia: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoReserva;
        codigo: string;
        usuarioId: string | null;
        salidaTransporteId: string | null;
        salidaTourId: string | null;
        correoContacto: string;
        cantidadPasajeros: number;
        moneda: import("@prisma/client").$Enums.Moneda;
        montoTotal: import("@prisma/client-runtime-utils").Decimal;
        montoAdelanto: import("@prisma/client-runtime-utils").Decimal;
        montoSaldo: import("@prisma/client-runtime-utils").Decimal;
        promocionId: string | null;
        montoDescuento: import("@prisma/client-runtime-utils").Decimal;
        tokenGestionInvitado: string;
    })[]>;
    verInvitado(codigo: string, token: string): Promise<{
        salidaTransporte: ({
            transporte: {
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
            estado: import("@prisma/client").$Enums.EstadoSalida;
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
        }) | null;
        salidaTour: ({
            tour: {
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
            };
        } & {
            id: string;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoSalida;
            fechaHoraSalida: Date;
            capacidad: number;
            minimoPasajeros: number;
            precioPen: import("@prisma/client-runtime-utils").Decimal;
            precioUsd: import("@prisma/client-runtime-utils").Decimal;
            permiteAdelanto: boolean;
            porcentajeAdelanto: number;
            tourId: string;
        }) | null;
        pasajeros: {
            id: string;
            nombres: string;
            apellidos: string;
            reservaId: string;
            nacionalidad: string;
            tipoDocumento: string;
            numeroDocumento: string;
        }[];
        pagos: {
            id: string;
            creadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoPago;
            moneda: import("@prisma/client").$Enums.Moneda;
            referenciaProveedor: string | null;
            reservaId: string;
            confirmadoPorId: string | null;
            monto: import("@prisma/client-runtime-utils").Decimal;
            metodo: import("@prisma/client").$Enums.MetodoPago;
            esAdelanto: boolean;
            codigoOperacion: string | null;
            urlComprobante: string | null;
            confirmadoEn: Date | null;
        }[];
    } & {
        id: string;
        telefonoWhatsApp: string;
        paisResidencia: string | null;
        creadoEn: Date;
        actualizadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoReserva;
        codigo: string;
        usuarioId: string | null;
        salidaTransporteId: string | null;
        salidaTourId: string | null;
        correoContacto: string;
        cantidadPasajeros: number;
        moneda: import("@prisma/client").$Enums.Moneda;
        montoTotal: import("@prisma/client-runtime-utils").Decimal;
        montoAdelanto: import("@prisma/client-runtime-utils").Decimal;
        montoSaldo: import("@prisma/client-runtime-utils").Decimal;
        promocionId: string | null;
        montoDescuento: import("@prisma/client-runtime-utils").Decimal;
        tokenGestionInvitado: string;
    }>;
    iniciarPago(codigo: string): Promise<{
        pagoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        moneda: import("@prisma/client").$Enums.Moneda;
        estado: import("@prisma/client").$Enums.EstadoPago;
        formToken: string;
        llavePublica: string;
    }>;
    subirComprobante(codigo: string, token: string, datos: ComprobanteSaldoDto): Promise<{
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        referenciaProveedor: string | null;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: import("@prisma/client-runtime-utils").Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        confirmadoEn: Date | null;
    }>;
    confirmarPago(pagoId: string, usuario: {
        id: string;
    }): Promise<{
        reserva: {
            id: string;
            telefonoWhatsApp: string;
            paisResidencia: string | null;
            creadoEn: Date;
            actualizadoEn: Date;
            estado: import("@prisma/client").$Enums.EstadoReserva;
            codigo: string;
            usuarioId: string | null;
            salidaTransporteId: string | null;
            salidaTourId: string | null;
            correoContacto: string;
            cantidadPasajeros: number;
            moneda: import("@prisma/client").$Enums.Moneda;
            montoTotal: import("@prisma/client-runtime-utils").Decimal;
            montoAdelanto: import("@prisma/client-runtime-utils").Decimal;
            montoSaldo: import("@prisma/client-runtime-utils").Decimal;
            promocionId: string | null;
            montoDescuento: import("@prisma/client-runtime-utils").Decimal;
            tokenGestionInvitado: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        referenciaProveedor: string | null;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: import("@prisma/client-runtime-utils").Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        confirmadoEn: Date | null;
    }>;
}
export {};
