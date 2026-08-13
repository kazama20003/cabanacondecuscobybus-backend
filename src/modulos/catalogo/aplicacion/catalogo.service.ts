import { Injectable, NotFoundException } from '@nestjs/common';
import { EstadoSalida, EstadoTraduccion, Prisma } from '@prisma/client';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

@Injectable()
export class CatalogoService {
  constructor(private readonly prisma: PrismaService) {}

  listarTransportes(origen?: string, destino?: string) {
    return this.prisma.transporte.findMany({
      where: {
        activo: true,
        ...(origen
          ? { origenNombre: { contains: origen, mode: 'insensitive' } }
          : {}),
        ...(destino
          ? { destinoNombre: { contains: destino, mode: 'insensitive' } }
          : {}),
      },
      include: {
        traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
        paradas: { orderBy: { orden: 'asc' } },
      },
    });
  }

  async obtenerTransporte(slug: string, idioma: string) {
    const transporte = await this.prisma.transporte.findFirst({
      where: { slug, activo: true },
      include: {
        paradas: { orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: { where: { idioma, estado: EstadoTraduccion.PUBLICADA } },
      },
    });
    if (!transporte) throw new NotFoundException('Transporte no encontrado');
    return transporte;
  }

  listarTours(destino?: string) {
    return this.prisma.tour.findMany({
      where: {
        activo: true,
        ...(destino
          ? { destinoNombre: { contains: destino, mode: 'insensitive' } }
          : {}),
      },
      include: {
        traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
        imagenes: { orderBy: { orden: 'asc' } },
      },
    });
  }

  async obtenerTour(slug: string, idioma: string) {
    const tour = await this.prisma.tour.findFirst({
      where: { slug, activo: true },
      include: {
        itinerarios: { orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: { where: { idioma, estado: EstadoTraduccion.PUBLICADA } },
      },
    });
    if (!tour) throw new NotFoundException('Tour no encontrado');
    return tour;
  }

  buscarSalidasTransporte(
    origen: string,
    destino: string,
    fecha: Date,
    pasajeros: number,
  ) {
    const inicio = new Date(fecha);
    inicio.setHours(0, 0, 0, 0);
    const fin = new Date(inicio);
    fin.setDate(fin.getDate() + 1);
    return this.prisma.salidaTransporte.findMany({
      where: {
        fechaHoraSalida: { gte: inicio, lt: fin },
        estado: {
          in: [
            EstadoSalida.A_LA_VENTA,
            EstadoSalida.PENDIENTE_DE_MINIMO,
            EstadoSalida.CONFIRMADA,
          ],
        },
        capacidad: { gte: pasajeros },
        transporte: {
          origenNombre: { contains: origen, mode: 'insensitive' },
          destinoNombre: { contains: destino, mode: 'insensitive' },
        },
      },
      include: {
        transporte: {
          include: {
            traducciones: true,
            paradas: { orderBy: { orden: 'asc' } },
          },
        },
      },
      orderBy: { fechaHoraSalida: 'asc' },
    });
  }

  crearTransporte(datos: {
    slug: string;
    origenNombre: string;
    origenLatitud: number;
    origenLongitud: number;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutosEstimada: number;
  }) {
    return this.prisma.transporte.create({
      data: {
        ...datos,
        origenLatitud: new Prisma.Decimal(datos.origenLatitud),
        origenLongitud: new Prisma.Decimal(datos.origenLongitud),
        destinoLatitud: new Prisma.Decimal(datos.destinoLatitud),
        destinoLongitud: new Prisma.Decimal(datos.destinoLongitud),
      },
    });
  }

  crearTour(datos: {
    slug: string;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutos: number;
    requiereGuia?: boolean;
  }) {
    return this.prisma.tour.create({
      data: {
        ...datos,
        destinoLatitud: new Prisma.Decimal(datos.destinoLatitud),
        destinoLongitud: new Prisma.Decimal(datos.destinoLongitud),
      },
    });
  }

  crearSalidaTransporte(datos: {
    transporteId: string;
    fechaHoraSalida: Date;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: number;
    precioUsd: number;
  }) {
    return this.prisma.salidaTransporte.create({
      data: {
        ...datos,
        minimoPasajeros: datos.minimoPasajeros ?? 2,
        precioPen: new Prisma.Decimal(datos.precioPen),
        precioUsd: new Prisma.Decimal(datos.precioUsd),
        estado: EstadoSalida.A_LA_VENTA,
      },
    });
  }

  crearSalidaTour(datos: {
    tourId: string;
    fechaHoraSalida: Date;
    capacidad: number;
    minimoPasajeros?: number;
    precioPen: number;
    precioUsd: number;
  }) {
    return this.prisma.salidaTour.create({
      data: {
        ...datos,
        minimoPasajeros: datos.minimoPasajeros ?? 1,
        precioPen: new Prisma.Decimal(datos.precioPen),
        precioUsd: new Prisma.Decimal(datos.precioUsd),
        estado: EstadoSalida.A_LA_VENTA,
      },
    });
  }
}
