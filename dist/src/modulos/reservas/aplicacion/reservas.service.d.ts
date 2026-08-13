import { MetodoPago, Moneda, Prisma } from '@prisma/client';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
type Pasajero = {
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
};
export declare class ReservasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(datos: {
        tipoServicio: 'TRANSPORTE' | 'TOUR';
        salidaId: string;
        correoContacto: string;
        telefonoWhatsApp: string;
        paisResidencia?: string;
        moneda: Moneda;
        pasajeros: Pasajero[];
        usuarioId?: string;
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
        montoTotal: Prisma.Decimal;
        montoAdelanto: Prisma.Decimal;
        montoSaldo: Prisma.Decimal;
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
        }) | null;
        salidaTour: ({
            tour: {
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
            };
        } & {
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
            monto: Prisma.Decimal;
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
        montoTotal: Prisma.Decimal;
        montoAdelanto: Prisma.Decimal;
        montoSaldo: Prisma.Decimal;
        tokenGestionInvitado: string;
    }>;
    iniciarPagoAdelanto(codigo: string): Promise<{
        pagoId: string;
        monto: Prisma.Decimal;
        moneda: import("@prisma/client").$Enums.Moneda;
        estado: import("@prisma/client").$Enums.EstadoPago;
        mensaje: string;
    }>;
    registrarComprobanteSaldo(codigo: string, token: string, datos: {
        codigoOperacion: string;
        urlComprobante: string;
        metodo: MetodoPago;
    }): Promise<{
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: Prisma.Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        referenciaProveedor: string | null;
        confirmadoEn: Date | null;
    }>;
    confirmarPago(pagoId: string, administradorId: string): Promise<{
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
            montoTotal: Prisma.Decimal;
            montoAdelanto: Prisma.Decimal;
            montoSaldo: Prisma.Decimal;
            tokenGestionInvitado: string;
        };
    } & {
        id: string;
        creadoEn: Date;
        estado: import("@prisma/client").$Enums.EstadoPago;
        moneda: import("@prisma/client").$Enums.Moneda;
        reservaId: string;
        confirmadoPorId: string | null;
        monto: Prisma.Decimal;
        metodo: import("@prisma/client").$Enums.MetodoPago;
        esAdelanto: boolean;
        codigoOperacion: string | null;
        urlComprobante: string | null;
        referenciaProveedor: string | null;
        confirmadoEn: Date | null;
    }>;
    private codigo;
}
export {};
