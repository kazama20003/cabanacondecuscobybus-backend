import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  ObjetivoPromocion,
  Prisma,
  Promocion,
  TipoPromocion,
} from '@prisma/client';
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../../../compartido/paginacion';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

export interface DatosPromocion {
  titulo: string;
  descripcion?: string;
  tipo: TipoPromocion;
  objetivo?: ObjetivoPromocion;
  codigo?: string;
  porcentajeDescuento?: number;
  montoDescuento?: number;
  fechaInicio: Date;
  fechaFin: Date;
  limiteUsos?: number;
  imagenUrl?: string;
  activo?: boolean;
}

@Injectable()
export class PromocionesService {
  constructor(private readonly prisma: PrismaService) {}

  private validar(datos: Partial<DatosPromocion>) {
    if (datos.porcentajeDescuento && datos.montoDescuento) {
      throw new BadRequestException(
        'Usa porcentaje O monto de descuento, no ambos',
      );
    }
    if (
      datos.fechaInicio &&
      datos.fechaFin &&
      datos.fechaFin <= datos.fechaInicio
    ) {
      throw new BadRequestException(
        'La fecha de fin debe ser posterior a la de inicio',
      );
    }
  }

  /** Promociones vigentes para el sitio público. */
  vigentes(objetivo?: ObjetivoPromocion) {
    const ahora = new Date();
    return this.prisma.promocion.findMany({
      where: {
        activo: true,
        fechaInicio: { lte: ahora },
        fechaFin: { gte: ahora },
        ...(objetivo
          ? { objetivo: { in: [objetivo, ObjetivoPromocion.TODOS] } }
          : {}),
        OR: [{ limiteUsos: null }, { usos: { lt: this.prisma.promocion.fields.limiteUsos } }],
      },
      orderBy: { fechaFin: 'asc' },
    });
  }

  async listarAdmin(paginacion: PaginacionDto) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.promocion.findMany({
        orderBy: { creadoEn: 'desc' },
        skip,
        take,
      }),
      this.prisma.promocion.count(),
    ]);
    return construirPaginado(datos, total, pagina, porPagina);
  }

  crear(datos: DatosPromocion) {
    this.validar(datos);
    if (!datos.porcentajeDescuento && !datos.montoDescuento) {
      throw new BadRequestException(
        'Indica el descuento: porcentaje o monto fijo',
      );
    }
    return this.prisma.promocion.create({
      data: {
        ...datos,
        codigo: datos.codigo?.trim().toUpperCase() || null,
        montoDescuento:
          datos.montoDescuento !== undefined
            ? new Prisma.Decimal(datos.montoDescuento)
            : null,
      },
    });
  }

  async actualizar(id: string, datos: Partial<DatosPromocion>) {
    this.validar(datos);
    const existe = await this.prisma.promocion.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Promoción no encontrada');
    return this.prisma.promocion.update({
      where: { id },
      data: {
        ...datos,
        codigo:
          datos.codigo !== undefined
            ? datos.codigo?.trim().toUpperCase() || null
            : undefined,
        montoDescuento:
          datos.montoDescuento !== undefined
            ? new Prisma.Decimal(datos.montoDescuento)
            : undefined,
      },
    });
  }

  async eliminar(id: string) {
    const existe = await this.prisma.promocion.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Promoción no encontrada');
    await this.prisma.promocion.update({
      where: { id },
      data: { activo: false },
    });
    return { mensaje: 'Promoción desactivada' };
  }

  /**
   * Valida un cupón para una reserva y devuelve la promoción si aplica.
   * Lanza BadRequest con motivo claro si no.
   */
  async validarCupon(
    codigo: string,
    objetivo: 'TRANSPORTES' | 'TOURS',
  ): Promise<Promocion> {
    const promocion = await this.prisma.promocion.findUnique({
      where: { codigo: codigo.trim().toUpperCase() },
    });
    if (!promocion || !promocion.activo)
      throw new BadRequestException('El cupón no existe o ya no está activo');
    const ahora = new Date();
    if (ahora < promocion.fechaInicio || ahora > promocion.fechaFin)
      throw new BadRequestException('El cupón está fuera de vigencia');
    if (
      promocion.limiteUsos !== null &&
      promocion.usos >= promocion.limiteUsos
    )
      throw new BadRequestException('El cupón agotó sus usos');
    if (
      promocion.objetivo !== ObjetivoPromocion.TODOS &&
      promocion.objetivo !== objetivo
    )
      throw new BadRequestException(
        `El cupón solo aplica a ${promocion.objetivo.toLowerCase()}`,
      );
    return promocion;
  }

  /** Calcula el descuento sobre un total. Nunca deja el total negativo. */
  calcularDescuento(promocion: Promocion, total: Prisma.Decimal): Prisma.Decimal {
    let descuento = new Prisma.Decimal(0);
    if (promocion.porcentajeDescuento) {
      descuento = total.mul(promocion.porcentajeDescuento).div(100);
    } else if (promocion.montoDescuento) {
      descuento = promocion.montoDescuento;
    }
    return descuento.gt(total) ? total : descuento;
  }
}
