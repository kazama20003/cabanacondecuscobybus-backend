import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  EstadoPago,
  EstadoReserva,
  EstadoSalida,
  MetodoPago,
  Moneda,
  Prisma,
} from '@prisma/client';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

type Pasajero = {
  nombres: string;
  apellidos: string;
  nacionalidad: string;
  tipoDocumento: string;
  numeroDocumento: string;
};

@Injectable()
export class ReservasService {
  constructor(private readonly prisma: PrismaService) {}

  async crear(datos: {
    tipoServicio: 'TRANSPORTE' | 'TOUR';
    salidaId: string;
    correoContacto: string;
    telefonoWhatsApp: string;
    paisResidencia?: string;
    moneda: Moneda;
    pasajeros: Pasajero[];
    usuarioId?: string;
  }) {
    if (!datos.pasajeros.length)
      throw new BadRequestException('Debe registrar al menos un pasajero');
    return this.prisma.$transaction(
      async (tx) => {
        const salida =
          datos.tipoServicio === 'TRANSPORTE'
            ? await tx.salidaTransporte.findUnique({
                where: { id: datos.salidaId },
              })
            : await tx.salidaTour.findUnique({ where: { id: datos.salidaId } });
        const estadosDisponibles: EstadoSalida[] = [
          EstadoSalida.A_LA_VENTA,
          EstadoSalida.PENDIENTE_DE_MINIMO,
          EstadoSalida.CONFIRMADA,
        ];
        if (!salida || !estadosDisponibles.includes(salida.estado))
          throw new NotFoundException('Salida no disponible');
        const ocupacion = await tx.reserva.aggregate({
          where: {
            ...(datos.tipoServicio === 'TRANSPORTE'
              ? { salidaTransporteId: datos.salidaId }
              : { salidaTourId: datos.salidaId }),
            estado: { notIn: [EstadoReserva.CANCELADA, EstadoReserva.VENCIDA] },
          },
          _sum: { cantidadPasajeros: true },
        });
        if (
          (ocupacion._sum.cantidadPasajeros ?? 0) + datos.pasajeros.length >
          salida.capacidad
        )
          throw new BadRequestException('No hay cupos suficientes');
        const montoTotal =
          datos.moneda === Moneda.PEN
            ? salida.precioPen.mul(datos.pasajeros.length)
            : salida.precioUsd.mul(datos.pasajeros.length);
        const montoAdelanto = salida.permiteAdelanto
          ? montoTotal.mul(salida.porcentajeAdelanto).div(100)
          : montoTotal;
        const reserva = await tx.reserva.create({
          data: {
            codigo: this.codigo(),
            usuarioId: datos.usuarioId,
            salidaTransporteId:
              datos.tipoServicio === 'TRANSPORTE' ? datos.salidaId : undefined,
            salidaTourId:
              datos.tipoServicio === 'TOUR' ? datos.salidaId : undefined,
            correoContacto: datos.correoContacto.toLowerCase(),
            telefonoWhatsApp: datos.telefonoWhatsApp,
            paisResidencia: datos.paisResidencia,
            cantidadPasajeros: datos.pasajeros.length,
            moneda: datos.moneda,
            montoTotal,
            montoAdelanto,
            montoSaldo: montoTotal.sub(montoAdelanto),
            tokenGestionInvitado: randomBytes(24).toString('hex'),
            pasajeros: { create: datos.pasajeros },
            historial: {
              create: {
                estado: EstadoReserva.PENDIENTE_PAGO,
                detalle: 'Reserva creada',
              },
            },
          },
          include: { pasajeros: true },
        });
        return reserva;
      },
      { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
    );
  }

  async verInvitado(codigo: string, token: string) {
    const reserva = await this.prisma.reserva.findFirst({
      where: { codigo, tokenGestionInvitado: token },
      include: {
        pasajeros: true,
        pagos: true,
        salidaTransporte: { include: { transporte: true } },
        salidaTour: { include: { tour: true } },
      },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async iniciarPagoAdelanto(codigo: string) {
    const reserva = await this.prisma.reserva.findUnique({ where: { codigo } });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    if (reserva.estado !== EstadoReserva.PENDIENTE_PAGO)
      throw new BadRequestException('La reserva ya tiene un pago iniciado');
    const pago = await this.prisma.pago.create({
      data: {
        reservaId: reserva.id,
        monto: reserva.montoAdelanto,
        moneda: reserva.moneda,
        metodo: MetodoPago.IZIPAY,
        esAdelanto: true,
      },
    });
    return {
      pagoId: pago.id,
      monto: pago.monto,
      moneda: pago.moneda,
      estado: pago.estado,
      mensaje:
        'Pago creado. Configure las credenciales Izipay para obtener la URL de cobro.',
    };
  }

  async registrarComprobanteSaldo(
    codigo: string,
    token: string,
    datos: {
      codigoOperacion: string;
      urlComprobante: string;
      metodo: MetodoPago;
    },
  ) {
    const reserva = await this.prisma.reserva.findFirst({
      where: { codigo, tokenGestionInvitado: token },
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    const estadosConSaldo: EstadoReserva[] = [
      EstadoReserva.SALDO_PENDIENTE,
      EstadoReserva.ADELANTO_PAGADO,
    ];
    if (!estadosConSaldo.includes(reserva.estado))
      throw new BadRequestException('La reserva no tiene saldo pendiente');
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

  async confirmarPago(pagoId: string, administradorId: string) {
    return this.prisma.$transaction(async (tx) => {
      const pago = await tx.pago.findUnique({
        where: { id: pagoId },
        include: { reserva: true },
      });
      if (!pago) throw new NotFoundException('Pago no encontrado');
      if (pago.estado === EstadoPago.APROBADO) return pago;
      await tx.pago.update({
        where: { id: pagoId },
        data: {
          estado: EstadoPago.APROBADO,
          confirmadoPorId: administradorId,
          confirmadoEn: new Date(),
        },
      });
      const estado =
        pago.esAdelanto && pago.reserva.montoSaldo.gt(0)
          ? EstadoReserva.SALDO_PENDIENTE
          : EstadoReserva.PAGO_TOTAL_PAGADO;
      await tx.reserva.update({
        where: { id: pago.reservaId },
        data: {
          estado,
          historial: {
            create: { estado, detalle: 'Pago confirmado por administración' },
          },
        },
      });
      return { ...pago, estado: EstadoPago.APROBADO };
    });
  }

  private codigo() {
    return `ITP-${new Date().getFullYear()}-${randomBytes(4).toString('hex').toUpperCase()}`;
  }
}
