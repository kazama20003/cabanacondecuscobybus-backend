import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EstadoReserva } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Retención de datos de auditoría.
 * Los registros de HistorialReserva de estados transitorios (no importantes)
 * se eliminan pasados RETENCION_HISTORIAL_DIAS (por defecto 7).
 * Los estados con valor legal/contable (pagos, confirmaciones, cancelaciones)
 * se conservan siempre.
 */
const ESTADOS_TRANSITORIOS: EstadoReserva[] = [
  EstadoReserva.PENDIENTE_PAGO,
  EstadoReserva.SALDO_PENDIENTE,
  EstadoReserva.VENCIDA,
];

@Injectable()
export class LimpiezaService {
  private readonly logger = new Logger(LimpiezaService.name);
  private readonly diasRetencion: number;

  constructor(
    private readonly prisma: PrismaService,
    configuracion: ConfigService,
  ) {
    this.diasRetencion = Number(
      configuracion.get('RETENCION_HISTORIAL_DIAS', 7),
    );
  }

  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async purgarHistorialTransitorio() {
    const limite = new Date();
    limite.setDate(limite.getDate() - this.diasRetencion);

    const { count } = await this.prisma.historialReserva.deleteMany({
      where: {
        estado: { in: ESTADOS_TRANSITORIOS },
        creadoEn: { lt: limite },
      },
    });
    if (count > 0) {
      this.logger.log(
        `Auditoría: ${count} registros transitorios (> ${this.diasRetencion} días) eliminados`,
      );
    }
  }
}
