import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EstadoSalida, PlantillaSalida, Prisma } from '@prisma/client';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

/** Zona horaria fija de operación (Perú no tiene horario de verano). */
const OFFSET_LIMA = '-05:00';
/** Ventana de generación hacia adelante cuando la plantilla no tiene fecha final. */
const DIAS_HORIZONTE = 60;

export interface CrearPlantillaEntrada {
  transporteId?: string;
  tourId?: string;
  vehiculoId?: string;
  horaSalida: string;
  diasSemana: number[];
  fechaDesde: string;
  fechaHasta?: string;
  capacidad: number;
  minimoPasajeros?: number;
  precioPen: number;
  precioUsd: number;
  permiteAdelanto?: boolean;
  porcentajeAdelanto?: number;
}

export interface ActualizarPlantillaEntrada {
  vehiculoId?: string | null;
  horaSalida?: string;
  diasSemana?: number[];
  fechaDesde?: string;
  fechaHasta?: string | null;
  capacidad?: number;
  minimoPasajeros?: number;
  precioPen?: number;
  precioUsd?: number;
  activo?: boolean;
}

@Injectable()
export class PlantillasSalidaService {
  private readonly logger = new Logger(PlantillasSalidaService.name);

  constructor(private readonly prisma: PrismaService) {}

  async listar(tipo?: 'TRANSPORTE' | 'TOUR') {
    const where: Prisma.PlantillaSalidaWhereInput =
      tipo === 'TRANSPORTE'
        ? { transporteId: { not: null } }
        : tipo === 'TOUR'
          ? { tourId: { not: null } }
          : {};
    return this.prisma.plantillaSalida.findMany({
      where,
      include: {
        transporte: {
          select: { slug: true, origenNombre: true, destinoNombre: true },
        },
        tour: { select: { slug: true, destinoNombre: true } },
        _count: { select: { salidasTransporte: true, salidasTour: true } },
      },
      orderBy: { creadoEn: 'desc' },
    });
  }

  async crear(datos: CrearPlantillaEntrada) {
    if (!!datos.transporteId === !!datos.tourId) {
      throw new BadRequestException(
        'La plantilla debe pertenecer a un transporte o a un tour (solo uno).',
      );
    }
    this.validarHorario(datos.horaSalida, datos.diasSemana);
    const plantilla = await this.prisma.plantillaSalida.create({
      data: {
        transporteId: datos.transporteId,
        tourId: datos.tourId,
        vehiculoId: datos.vehiculoId,
        horaSalida: datos.horaSalida,
        diasSemana: [...new Set(datos.diasSemana)].sort(),
        fechaDesde: new Date(`${datos.fechaDesde}T00:00:00${OFFSET_LIMA}`),
        fechaHasta: datos.fechaHasta
          ? new Date(`${datos.fechaHasta}T00:00:00${OFFSET_LIMA}`)
          : null,
        capacidad: datos.capacidad,
        minimoPasajeros: datos.minimoPasajeros ?? (datos.transporteId ? 2 : 1),
        precioPen: new Prisma.Decimal(datos.precioPen),
        precioUsd: new Prisma.Decimal(datos.precioUsd),
        permiteAdelanto: datos.permiteAdelanto ?? true,
        porcentajeAdelanto: datos.porcentajeAdelanto ?? 50,
      },
    });
    const generadas = await this.generarSalidas(plantilla);
    return { ...plantilla, salidasGeneradas: generadas };
  }

  async actualizar(id: string, cambios: ActualizarPlantillaEntrada) {
    const existente = await this.prisma.plantillaSalida.findUnique({
      where: { id },
    });
    if (!existente) throw new NotFoundException('Plantilla no encontrada');
    if (cambios.horaSalida || cambios.diasSemana) {
      this.validarHorario(
        cambios.horaSalida ?? existente.horaSalida,
        cambios.diasSemana ?? existente.diasSemana,
      );
    }
    const plantilla = await this.prisma.plantillaSalida.update({
      where: { id },
      data: {
        vehiculoId: cambios.vehiculoId,
        horaSalida: cambios.horaSalida,
        diasSemana: cambios.diasSemana
          ? [...new Set(cambios.diasSemana)].sort()
          : undefined,
        fechaDesde: cambios.fechaDesde
          ? new Date(`${cambios.fechaDesde}T00:00:00${OFFSET_LIMA}`)
          : undefined,
        fechaHasta:
          cambios.fechaHasta === undefined
            ? undefined
            : cambios.fechaHasta
              ? new Date(`${cambios.fechaHasta}T00:00:00${OFFSET_LIMA}`)
              : null,
        capacidad: cambios.capacidad,
        minimoPasajeros: cambios.minimoPasajeros,
        precioPen:
          cambios.precioPen !== undefined
            ? new Prisma.Decimal(cambios.precioPen)
            : undefined,
        precioUsd:
          cambios.precioUsd !== undefined
            ? new Prisma.Decimal(cambios.precioUsd)
            : undefined,
        activo: cambios.activo,
      },
    });
    // Al cambiar horario/vigencia se eliminan salidas futuras sin reservas y
    // se regeneran según la nueva configuración.
    await this.eliminarSalidasFuturasSinReservas(plantilla.id);
    let generadas = 0;
    if (plantilla.activo) generadas = await this.generarSalidas(plantilla);
    return { ...plantilla, salidasGeneradas: generadas };
  }

  async eliminar(id: string) {
    const existente = await this.prisma.plantillaSalida.findUnique({
      where: { id },
    });
    if (!existente) throw new NotFoundException('Plantilla no encontrada');
    await this.eliminarSalidasFuturasSinReservas(id);
    // Las salidas con reservas quedan intactas (FK pasa a null por ON DELETE SET NULL).
    await this.prisma.plantillaSalida.delete({ where: { id } });
    return { eliminada: true };
  }

  /** Extiende la ventana de salidas generadas para todas las plantillas activas. */
  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async extenderHorizonte() {
    const activas = await this.prisma.plantillaSalida.findMany({
      where: { activo: true },
    });
    let total = 0;
    for (const plantilla of activas) {
      try {
        total += await this.generarSalidas(plantilla);
      } catch (error) {
        this.logger.error(
          `No se pudieron generar salidas de la plantilla ${plantilla.id}`,
          error instanceof Error ? error.stack : String(error),
        );
      }
    }
    if (total > 0) this.logger.log(`Generadas ${total} salidas recurrentes`);
    return total;
  }

  /**
   * Materializa las salidas de la plantilla entre hoy (o fechaDesde) y el
   * horizonte. Idempotente: las fechas ya generadas se omiten (skipDuplicates
   * sobre el único [plantillaId, fechaHoraSalida]).
   */
  async generarSalidas(plantilla: PlantillaSalida): Promise<number> {
    const fechas = this.fechasAGenerar(plantilla);
    if (fechas.length === 0) return 0;
    const base = {
      plantillaId: plantilla.id,
      capacidad: plantilla.capacidad,
      minimoPasajeros: plantilla.minimoPasajeros,
      precioPen: plantilla.precioPen,
      precioUsd: plantilla.precioUsd,
      permiteAdelanto: plantilla.permiteAdelanto,
      porcentajeAdelanto: plantilla.porcentajeAdelanto,
      estado: EstadoSalida.A_LA_VENTA,
    };
    if (plantilla.transporteId) {
      const resultado = await this.prisma.salidaTransporte.createMany({
        data: fechas.map((fechaHoraSalida) => ({
          ...base,
          transporteId: plantilla.transporteId as string,
          vehiculoId: plantilla.vehiculoId,
          fechaHoraSalida,
        })),
        skipDuplicates: true,
      });
      return resultado.count;
    }
    const resultado = await this.prisma.salidaTour.createMany({
      data: fechas.map((fechaHoraSalida) => ({
        ...base,
        tourId: plantilla.tourId as string,
        fechaHoraSalida,
      })),
      skipDuplicates: true,
    });
    return resultado.count;
  }

  /** Fechas concretas (instantes UTC) que corresponden al horario de la plantilla. */
  private fechasAGenerar(plantilla: PlantillaSalida): Date[] {
    const hoy = new Date();
    const inicio =
      plantilla.fechaDesde > hoy ? new Date(plantilla.fechaDesde) : hoy;
    const horizonte = new Date(hoy);
    horizonte.setDate(horizonte.getDate() + DIAS_HORIZONTE);
    const fin =
      plantilla.fechaHasta && plantilla.fechaHasta < horizonte
        ? plantilla.fechaHasta
        : horizonte;

    const fechas: Date[] = [];
    // Se itera por día calendario de Lima para respetar diasSemana y horaSalida.
    const cursor = new Date(inicio);
    while (cursor <= fin) {
      const enLima = new Date(cursor.getTime() - 5 * 60 * 60 * 1000);
      const diaIso = enLima.getUTCDay() === 0 ? 7 : enLima.getUTCDay();
      if (plantilla.diasSemana.includes(diaIso)) {
        const fechaLocal = enLima.toISOString().slice(0, 10);
        const salida = new Date(
          `${fechaLocal}T${plantilla.horaSalida}:00${OFFSET_LIMA}`,
        );
        if (salida > hoy) fechas.push(salida);
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return fechas;
  }

  private async eliminarSalidasFuturasSinReservas(plantillaId: string) {
    const ahora = new Date();
    await this.prisma.salidaTransporte.deleteMany({
      where: {
        plantillaId,
        fechaHoraSalida: { gt: ahora },
        reservas: { none: {} },
      },
    });
    await this.prisma.salidaTour.deleteMany({
      where: {
        plantillaId,
        fechaHoraSalida: { gt: ahora },
        reservas: { none: {} },
      },
    });
  }

  private validarHorario(horaSalida: string, diasSemana: number[]) {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(horaSalida)) {
      throw new BadRequestException(
        'horaSalida debe tener formato HH:mm (00:00–23:59)',
      );
    }
    if (
      !Array.isArray(diasSemana) ||
      diasSemana.length === 0 ||
      diasSemana.some((d) => !Number.isInteger(d) || d < 1 || d > 7)
    ) {
      throw new BadRequestException(
        'diasSemana debe ser una lista de días ISO (1=lunes … 7=domingo)',
      );
    }
  }
}
