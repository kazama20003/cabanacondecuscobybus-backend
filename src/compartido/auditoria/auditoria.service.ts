import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Prisma } from '@prisma/client';
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../paginacion';
import { PrismaService } from '../prisma/prisma.service';

/** Días que se conserva el historial antes de purgarlo. */
const DIAS_RETENCION = 30;

export interface EventoAuditoria {
  usuarioId?: string;
  accion: 'CREAR' | 'ACTUALIZAR' | 'ELIMINAR' | 'DESACTIVAR' | 'CONFIRMAR';
  entidad:
    | 'TRANSPORTE'
    | 'TOUR'
    | 'SALIDA'
    | 'PLANTILLA_SALIDA'
    | 'PROMOCION'
    | 'USUARIO'
    | 'PAGO';
  entidadId?: string;
  descripcion: string;
  detalle?: Record<string, unknown>;
}

@Injectable()
export class AuditoriaService {
  private readonly logger = new Logger(AuditoriaService.name);

  constructor(private readonly prisma: PrismaService) {}

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

  /** Purga el historial con más de 30 días — se conserva ~1 mes de registro. */
  @Cron(CronExpression.EVERY_DAY_AT_4AM)
  async purgarAntiguos() {
    const limite = new Date();
    limite.setDate(limite.getDate() - DIAS_RETENCION);
    const { count } = await this.prisma.auditoria.deleteMany({
      where: { creadoEn: { lt: limite } },
    });
    if (count > 0) {
      this.logger.log(`Auditoría purgada: ${count} registros de más de ${DIAS_RETENCION} días`);
    }
  }
}
