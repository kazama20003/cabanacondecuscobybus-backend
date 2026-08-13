"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const node_crypto_1 = require("node:crypto");
const prisma_service_1 = require("../../../compartido/prisma/prisma.service");
let ReservasService = class ReservasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(datos) {
        if (!datos.pasajeros.length)
            throw new common_1.BadRequestException('Debe registrar al menos un pasajero');
        return this.prisma.$transaction(async (tx) => {
            const salida = datos.tipoServicio === 'TRANSPORTE'
                ? await tx.salidaTransporte.findUnique({
                    where: { id: datos.salidaId },
                })
                : await tx.salidaTour.findUnique({ where: { id: datos.salidaId } });
            const estadosDisponibles = [
                client_1.EstadoSalida.A_LA_VENTA,
                client_1.EstadoSalida.PENDIENTE_DE_MINIMO,
                client_1.EstadoSalida.CONFIRMADA,
            ];
            if (!salida || !estadosDisponibles.includes(salida.estado))
                throw new common_1.NotFoundException('Salida no disponible');
            const ocupacion = await tx.reserva.aggregate({
                where: {
                    ...(datos.tipoServicio === 'TRANSPORTE'
                        ? { salidaTransporteId: datos.salidaId }
                        : { salidaTourId: datos.salidaId }),
                    estado: { notIn: [client_1.EstadoReserva.CANCELADA, client_1.EstadoReserva.VENCIDA] },
                },
                _sum: { cantidadPasajeros: true },
            });
            if ((ocupacion._sum.cantidadPasajeros ?? 0) + datos.pasajeros.length >
                salida.capacidad)
                throw new common_1.BadRequestException('No hay cupos suficientes');
            const montoTotal = datos.moneda === client_1.Moneda.PEN
                ? salida.precioPen.mul(datos.pasajeros.length)
                : salida.precioUsd.mul(datos.pasajeros.length);
            const montoAdelanto = salida.permiteAdelanto
                ? montoTotal.mul(salida.porcentajeAdelanto).div(100)
                : montoTotal;
            const reserva = await tx.reserva.create({
                data: {
                    codigo: this.codigo(),
                    usuarioId: datos.usuarioId,
                    salidaTransporteId: datos.tipoServicio === 'TRANSPORTE' ? datos.salidaId : undefined,
                    salidaTourId: datos.tipoServicio === 'TOUR' ? datos.salidaId : undefined,
                    correoContacto: datos.correoContacto.toLowerCase(),
                    telefonoWhatsApp: datos.telefonoWhatsApp,
                    paisResidencia: datos.paisResidencia,
                    cantidadPasajeros: datos.pasajeros.length,
                    moneda: datos.moneda,
                    montoTotal,
                    montoAdelanto,
                    montoSaldo: montoTotal.sub(montoAdelanto),
                    tokenGestionInvitado: (0, node_crypto_1.randomBytes)(24).toString('hex'),
                    pasajeros: { create: datos.pasajeros },
                    historial: {
                        create: {
                            estado: client_1.EstadoReserva.PENDIENTE_PAGO,
                            detalle: 'Reserva creada',
                        },
                    },
                },
                include: { pasajeros: true },
            });
            return reserva;
        }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable });
    }
    async verInvitado(codigo, token) {
        const reserva = await this.prisma.reserva.findFirst({
            where: { codigo, tokenGestionInvitado: token },
            include: {
                pasajeros: true,
                pagos: true,
                salidaTransporte: { include: { transporte: true } },
                salidaTour: { include: { tour: true } },
            },
        });
        if (!reserva)
            throw new common_1.NotFoundException('Reserva no encontrada');
        return reserva;
    }
    async iniciarPagoAdelanto(codigo) {
        const reserva = await this.prisma.reserva.findUnique({ where: { codigo } });
        if (!reserva)
            throw new common_1.NotFoundException('Reserva no encontrada');
        if (reserva.estado !== client_1.EstadoReserva.PENDIENTE_PAGO)
            throw new common_1.BadRequestException('La reserva ya tiene un pago iniciado');
        const pago = await this.prisma.pago.create({
            data: {
                reservaId: reserva.id,
                monto: reserva.montoAdelanto,
                moneda: reserva.moneda,
                metodo: client_1.MetodoPago.IZIPAY,
                esAdelanto: true,
            },
        });
        return {
            pagoId: pago.id,
            monto: pago.monto,
            moneda: pago.moneda,
            estado: pago.estado,
            mensaje: 'Pago creado. Configure las credenciales Izipay para obtener la URL de cobro.',
        };
    }
    async registrarComprobanteSaldo(codigo, token, datos) {
        const reserva = await this.prisma.reserva.findFirst({
            where: { codigo, tokenGestionInvitado: token },
        });
        if (!reserva)
            throw new common_1.NotFoundException('Reserva no encontrada');
        const estadosConSaldo = [
            client_1.EstadoReserva.SALDO_PENDIENTE,
            client_1.EstadoReserva.ADELANTO_PAGADO,
        ];
        if (!estadosConSaldo.includes(reserva.estado))
            throw new common_1.BadRequestException('La reserva no tiene saldo pendiente');
        return this.prisma.pago.create({
            data: {
                reservaId: reserva.id,
                monto: reserva.montoSaldo,
                moneda: reserva.moneda,
                metodo: datos.metodo,
                codigoOperacion: datos.codigoOperacion,
                urlComprobante: datos.urlComprobante,
            },
        });
    }
    async confirmarPago(pagoId, administradorId) {
        return this.prisma.$transaction(async (tx) => {
            const pago = await tx.pago.findUnique({
                where: { id: pagoId },
                include: { reserva: true },
            });
            if (!pago)
                throw new common_1.NotFoundException('Pago no encontrado');
            if (pago.estado === client_1.EstadoPago.APROBADO)
                return pago;
            await tx.pago.update({
                where: { id: pagoId },
                data: {
                    estado: client_1.EstadoPago.APROBADO,
                    confirmadoPorId: administradorId,
                    confirmadoEn: new Date(),
                },
            });
            const estado = pago.esAdelanto && pago.reserva.montoSaldo.gt(0)
                ? client_1.EstadoReserva.SALDO_PENDIENTE
                : client_1.EstadoReserva.PAGO_TOTAL_PAGADO;
            await tx.reserva.update({
                where: { id: pago.reservaId },
                data: {
                    estado,
                    historial: {
                        create: { estado, detalle: 'Pago confirmado por administración' },
                    },
                },
            });
            return { ...pago, estado: client_1.EstadoPago.APROBADO };
        });
    }
    codigo() {
        return `ITP-${new Date().getFullYear()}-${(0, node_crypto_1.randomBytes)(4).toString('hex').toUpperCase()}`;
    }
};
exports.ReservasService = ReservasService;
exports.ReservasService = ReservasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservasService);
//# sourceMappingURL=reservas.service.js.map