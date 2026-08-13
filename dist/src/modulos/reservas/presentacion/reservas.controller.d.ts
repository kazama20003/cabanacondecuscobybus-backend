import { MetodoPago, Moneda } from '@prisma/client';
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
}
declare class ComprobanteSaldoDto {
    codigoOperacion: string;
    urlComprobante: string;
    metodo: MetodoPago;
}
export declare class ReservasController {
    private readonly servicio;
    constructor(servicio: ReservasService);
    crear(datos: CrearReservaDto): Promise<{
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
        tokenGestionInvitado: string;
    }>;
    verInvitado(codigo: string, token: string): Promise<{
        salidaTransporte: ({
            transporte: {
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
        }) | null;
        salidaTour: ({
            tour: {
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
            };
        } & {
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
            reservaId: string;
            confirmadoPorId: string | null;
            monto: import("@prisma/client-runtime-utils").Decimal;
            metodo: import("@prisma/client").$Enums.MetodoPago;
            esAdelanto: boolean;
            codigoOperacion: string | null;
            urlComprobante: string | null;
            referenciaProveedor: string | null;
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
        tokenGestionInvitado: string;
    }>;
    iniciarPago(codigo: string): Promise<{
        pagoId: string;
        monto: import("@prisma/client-runtime-utils").Decimal;
        moneda: import("@prisma/client").$Enums.Moneda;
        estado: import("@prisma/client").$Enums.EstadoPago;
        mensaje: string;
    }>;
    subirComprobante(codigo: string, token: string, datos: ComprobanteSaldoDto): Promise<{
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: import("@prisma/client-runtime-utils").Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        referenciaProveedor: string | null;
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
            tokenGestionInvitado: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: import("@prisma/client-runtime-utils").Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        referenciaProveedor: string | null;
        confirmadoEn: Date | null;
    }>;
}
export {};
