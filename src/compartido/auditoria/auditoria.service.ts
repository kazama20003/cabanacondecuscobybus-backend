import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Prisma } from '@prisma/client';
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../paginacion';
import { PrismaService } from '../prisma/prisma.service';

export interface EventoAuditoria {
  usuarioId?: string;
  accion:
    | 'CREAR'
    | 'ACTUALIZAR'
    | 'ELIMINAR'
    | 'DESACTIVAR'
    | 'CONFIRMAR'
    | 'CONFIRMAR_PAGO_MANUAL'
    | 'IPN_PAGO_RESERVA_NO_VIGENTE'
    | 'SOLICITUD_CANCELACION'
    | 'SOLICITUD_REPROGRAMACION';
  entidad:
    | 'TRANSPORTE'
    | 'TOUR'
    | 'SALIDA'
    | 'PLANTILLA_SALIDA'
    | 'PROMOCION'
    | 'USUARIO'
    | 'PAGO'
    | 'RESERVA';
  entidadId?: string;
  descripcion: string;
  detalle?: Record<string, unknown>;
}

@Injectable()
export class AuditoriaService {
  private readonly logger = new Logger(AuditoriaService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  /** Nunca rompe la operación auditada: los fallos solo se loguean. */
  async registrar(evento: EventoAuditoria): Promise<void> {
    try {
      await this.prisma.auditoria.create({
        data: {
          usuarioId: evento.usuarioId,
          accion: evento.accion,
          entidad: evento.entidad,
          entidadId: evento.entidadId,
          descripcion: evento.descripcion,
          detalle: evento.detalle as Prisma.InputJsonValue | undefined,
        },
      });
    } catch (error) {
      this.logger.error(
        `No se pudo registrar auditoría: ${evento.descripcion}`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  async listar(paginacion: PaginacionDto, entidad?: string) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    const where = entidad ? { entidad } : {};
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.auditoria.findMany({
        where,
        include: {
          usuario: { select: { correo: true, nombres: true, apellidos: true } },
        },
        orderBy: { creadoEn: 'desc' },
        skip,
        take,
      }),
      this.prisma.auditoria.count({ where }),
    ]);
    return construirPaginado(datos, total, pagina, porPagina);
  }

  /** Retención de auditoría configurable según la política aprobada por el negocio. */
  @Cron(CronExpression.EVERY_DAY_AT_4AM)
  async purgarAntiguos() {
    const diasRetencion = Number(this.config.get('RETENCION_AUDITORIA_DIAS', 30));
    if (!Number.isFinite(diasRetencion) || diasRetencion < 1 || diasRetencion > 3650) {
      this.logger.error('RETENCION_AUDITORIA_DIAS debe estar entre 1 y 3650; no se borró auditoría.');
      return;
    }
    const limite = new Date();
    limite.setDate(limite.getDate() - diasRetencion);
    const { count } = await this.prisma.auditoria.deleteMany({
      where: { creadoEn: { lt: limite } },
    });
    if (count > 0) {
      this.logger.log(`Auditoría purgada: ${count} registros de más de ${diasRetencion} días`);
    }
  }
}
