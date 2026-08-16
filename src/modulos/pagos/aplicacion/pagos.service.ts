import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EstadoPago, EstadoReserva } from '@prisma/client';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
import { NotificacionesService } from '../../../compartido/notificaciones/notificaciones.service';
import { AnswerIpn, IzipayService } from './izipay.service';

@Injectable()
export class PagosService {
  private readonly logger = new Logger(PagosService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly izipay: IzipayService,
    private readonly notificaciones: NotificacionesService,
  ) {}

  /** Procesa la notificación IPN de Izipay (firma ya validada por el controller). */
  async procesarIpn(answer: AnswerIpn) {
    const pagoId = answer.orderDetails?.orderId;
    if (!pagoId) throw new NotFoundException('IPN sin orderId');

    const pago = await this.prisma.pago.findUnique({
      where: { id: pagoId },
      include: { reserva: true },
    });
    if (!pago) throw new NotFoundException(`Pago ${pagoId} no existe`);
    if (pago.estado === EstadoPago.APROBADO) {
      return { mensaje: 'Pago ya estaba aprobado' };
    }

    const referencia = answer.transactions?.[0]?.uuid;

    if (answer.orderStatus === 'PAID') {
      const estadoReserva =
        pago.esAdelanto && pago.reserva.montoSaldo.gt(0)
          ? EstadoReserva.ADELANTO_PAGADO
          : EstadoReserva.PAGO_TOTAL_PAGADO;

      await this.prisma.$transaction([
        this.prisma.pago.update({
          where: { id: pago.id },
          data: {
            estado: EstadoPago.APROBADO,
            referenciaProveedor: referencia,
            confirmadoEn: new Date(),
          },
        }),
        this.prisma.reserva.update({
          where: { id: pago.reservaId },
          data: {
            estado: estadoReserva,
            historial: {
              create: {
                estado: estadoReserva,
                detalle: `Pago Izipay aprobado (${referencia ?? 'sin referencia'})`,
              },
            },
          },
        }),
      ]);
      void this.notificaciones.pagoAprobado(pago.reserva);
      this.logger.log(`Pago ${pago.id} aprobado vía Izipay`);
      return { mensaje: 'Pago aprobado' };
    }

    await this.prisma.pago.update({
      where: { id: pago.id },
      data: {
        estado: EstadoPago.RECHAZADO,
        referenciaProveedor: referencia,
      },
    });
    this.logger.warn(
      `Pago ${pago.id} no aprobado por Izipay (orderStatus=${answer.orderStatus})`,
    );
    return { mensaje: `Pago registrado como rechazado (${answer.orderStatus})` };
  }
}
