import { Injectable, NotFoundException } from '@nestjs/common';
import {
  EstadoSalida,
  EstadoTraduccion,
  Prisma,
  TipoMedio,
} from '@prisma/client';

interface ParadaEntrada {
  nombre: string;
  latitud: number;
  longitud: number;
  minutos: number;
  duracionParadaMinutos?: number;
  descripcion?: string;
}

interface MedioEntrada {
  url: string;
  textoAlterno?: string;
  tipo?: TipoMedio;
}
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../../../compartido/paginacion';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
import { TraduccionService } from '../../../compartido/traduccion/traduccion.service';

interface ContenidoEntrada {
  titulo: string;
  resumen: string;
  descripcion: string;
  queLlevar?: string;
}

/** Idiomas a los que se traduce automáticamente desde el español. */
const IDIOMAS_DESTINO = ['en'];

@Injectable()
export class CatalogoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly traduccion: TraduccionService,
  ) {}

  async listarTransportes(
    paginacion: PaginacionDto,
    origen?: string,
    destino?: string,
  ) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    const where = {
      activo: true,
      ...(origen
        ? { origenNombre: { contains: origen, mode: 'insensitive' as const } }
        : {}),
      ...(destino
        ? { destinoNombre: { contains: destino, mode: 'insensitive' as const } }
        : {}),
    };
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.transporte.findMany({
        where,
        include: {
          traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
          paradas: { orderBy: { orden: 'asc' } },
          salidas: { orderBy: { fechaHoraSalida: 'asc' } },
        },
        orderBy: { creadoEn: 'desc' },
        skip,
        take,
      }),
      this.prisma.transporte.count({ where }),
    ]);
    return construirPaginado(datos, total, pagina, porPagina);
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

  async listarTours(paginacion: PaginacionDto, destino?: string) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    const where = {
      activo: true,
      ...(destino
        ? { destinoNombre: { contains: destino, mode: 'insensitive' as const } }
        : {}),
    };
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.tour.findMany({
        where,
        include: {
          traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
          imagenes: { orderBy: { orden: 'asc' } },
          salidas: { orderBy: { fechaHoraSalida: 'asc' } },
        },
        orderBy: { creadoEn: 'desc' },
        skip,
        take,
      }),
      this.prisma.tour.count({ where }),
    ]);
    return construirPaginado(datos, total, pagina, porPagina);
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

  async crearTransporte(datos: {
    slug: string;
    origenNombre: string;
    origenLatitud: number;
    origenLongitud: number;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutosEstimada: number;
    paradas?: ParadaEntrada[];
    medios?: MedioEntrada[];
    contenido?: ContenidoEntrada;
  }) {
    const { paradas, medios, contenido, ...base } = datos;
    const transporte = await this.crearTransporteBase(base, paradas, medios);
    if (contenido) {
      await this.generarTraducciones('transporte', transporte.id, contenido);
    }
    return this.prisma.transporte.findUnique({
      where: { id: transporte.id },
      include: {
        paradas: { orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: true,
      },
    });
  }

  private crearTransporteBase(
    base: {
      slug: string;
      origenNombre: string;
      origenLatitud: number;
      origenLongitud: number;
      destinoNombre: string;
      destinoLatitud: number;
      destinoLongitud: number;
      duracionMinutosEstimada: number;
    },
    paradas?: ParadaEntrada[],
    medios?: MedioEntrada[],
  ) {
    return this.prisma.transporte.create({
      data: {
        ...base,
        origenLatitud: new Prisma.Decimal(base.origenLatitud),
        origenLongitud: new Prisma.Decimal(base.origenLongitud),
        destinoLatitud: new Prisma.Decimal(base.destinoLatitud),
        destinoLongitud: new Prisma.Decimal(base.destinoLongitud),
        paradas: paradas?.length
          ? {
              create: paradas.map((parada, indice) => ({
                orden: indice + 1,
                nombre: parada.nombre,
                latitud: new Prisma.Decimal(parada.latitud),
                longitud: new Prisma.Decimal(parada.longitud),
                minutos: parada.minutos,
                duracionParadaMinutos: parada.duracionParadaMinutos ?? 0,
                descripcion: parada.descripcion,
              })),
            }
          : undefined,
        imagenes: medios?.length
          ? {
              create: medios.map((medio, indice) => ({
                url: medio.url,
                textoAlterno: medio.textoAlterno,
                tipo: medio.tipo ?? TipoMedio.IMAGEN,
                orden: indice,
              })),
            }
          : undefined,
      },
      include: {
        paradas: { orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
      },
    });
  }

  async crearTour(datos: {
    slug: string;
    destinoNombre: string;
    destinoLatitud: number;
    destinoLongitud: number;
    duracionMinutos: number;
    requiereGuia?: boolean;
    medios?: MedioEntrada[];
    contenido?: ContenidoEntrada;
  }) {
    const { medios, contenido, ...base } = datos;
    const tour = await this.crearTourBase(base, medios);
    if (contenido) {
      await this.generarTraducciones('tour', tour.id, contenido);
    }
    return this.prisma.tour.findUnique({
      where: { id: tour.id },
      include: {
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: true,
      },
    });
  }

  private crearTourBase(
    base: {
      slug: string;
      destinoNombre: string;
      destinoLatitud: number;
      destinoLongitud: number;
      duracionMinutos: number;
      requiereGuia?: boolean;
    },
    medios?: MedioEntrada[],
  ) {
    return this.prisma.tour.create({
      data: {
        ...base,
        destinoLatitud: new Prisma.Decimal(base.destinoLatitud),
        destinoLongitud: new Prisma.Decimal(base.destinoLongitud),
        imagenes: medios?.length
          ? {
              create: medios.map((medio, indice) => ({
                url: medio.url,
                textoAlterno: medio.textoAlterno,
                tipo: medio.tipo ?? TipoMedio.IMAGEN,
                orden: indice,
              })),
            }
          : undefined,
      },
      include: { imagenes: { orderBy: { orden: 'asc' } } },
    });
  }

  /** Define el itinerario completo del tour (reemplaza el set, orden = posición). */
  async definirItinerario(
    tourId: string,
    items: {
      titulo: string;
      descripcion: string;
      latitud?: number;
      longitud?: number;
    }[],
  ) {
    const tour = await this.prisma.tour.findUnique({ where: { id: tourId } });
    if (!tour) throw new NotFoundException('Tour no encontrado');

    await this.prisma.$transaction([
      this.prisma.itinerarioTour.deleteMany({ where: { tourId } }),
      this.prisma.itinerarioTour.createMany({
        data: items.map((item, indice) => ({
          tourId,
          orden: indice + 1,
          titulo: item.titulo,
          descripcion: item.descripcion,
          latitud:
            item.latitud !== undefined ? new Prisma.Decimal(item.latitud) : null,
          longitud:
            item.longitud !== undefined
              ? new Prisma.Decimal(item.longitud)
              : null,
        })),
      }),
    ]);
    return this.prisma.itinerarioTour.findMany({
      where: { tourId },
      orderBy: { orden: 'asc' },
    });
  }

  /** Listado de salidas para el panel, paginado y con ocupación. */
  async listarSalidasAdmin(
    paginacion: PaginacionDto,
    tipo: 'TRANSPORTE' | 'TOUR',
  ) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    if (tipo === 'TRANSPORTE') {
      const [datos, total] = await this.prisma.$transaction([
        this.prisma.salidaTransporte.findMany({
          include: {
            transporte: {
              select: { origenNombre: true, destinoNombre: true, slug: true },
            },
            vehiculo: true,
            reservas: {
              where: {
                estado: {
                  notIn: ['CANCELADA', 'VENCIDA'],
                },
              },
              select: { cantidadPasajeros: true },
            },
          },
          orderBy: { fechaHoraSalida: 'asc' },
          skip,
          take,
        }),
        this.prisma.salidaTransporte.count(),
      ]);
      return construirPaginado(
        datos.map((s) => ({
          ...s,
          ocupados: s.reservas.reduce((n, r) => n + r.cantidadPasajeros, 0),
          reservas: undefined,
        })),
        total,
        pagina,
        porPagina,
      );
    }
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.salidaTour.findMany({
        include: {
          tour: { select: { destinoNombre: true, slug: true } },
          reservas: {
            where: { estado: { notIn: ['CANCELADA', 'VENCIDA'] } },
            select: { cantidadPasajeros: true },
          },
        },
        orderBy: { fechaHoraSalida: 'asc' },
        skip,
        take,
      }),
      this.prisma.salidaTour.count(),
    ]);
    return construirPaginado(
      datos.map((s) => ({
        ...s,
        ocupados: s.reservas.reduce((n, r) => n + r.cantidadPasajeros, 0),
        reservas: undefined,
      })),
      total,
      pagina,
      porPagina,
    );
  }

  /** Control de la salida: cambiar estado (a la venta, confirmada, cancelada…),
      vehículo, capacidad o precios. */
  async actualizarSalida(
    tipo: 'TRANSPORTE' | 'TOUR',
    id: string,
    cambios: {
      estado?: EstadoSalida;
      vehiculoId?: string | null;
      capacidad?: number;
      precioPen?: number;
      precioUsd?: number;
      fechaHoraSalida?: Date;
    },
  ) {
    const data = {
      estado: cambios.estado,
      capacidad: cambios.capacidad,
      precioPen:
        cambios.precioPen !== undefined
          ? new Prisma.Decimal(cambios.precioPen)
          : undefined,
      precioUsd:
        cambios.precioUsd !== undefined
          ? new Prisma.Decimal(cambios.precioUsd)
          : undefined,
      fechaHoraSalida: cambios.fechaHoraSalida,
    };
    if (tipo === 'TRANSPORTE') {
      const salida = await this.prisma.salidaTransporte.findUnique({
        where: { id },
      });
      if (!salida) throw new NotFoundException('Salida no encontrada');
      return this.prisma.salidaTransporte.update({
        where: { id },
        data: { ...data, vehiculoId: cambios.vehiculoId },
      });
    }
    const salida = await this.prisma.salidaTour.findUnique({ where: { id } });
    if (!salida) throw new NotFoundException('Salida no encontrada');
    return this.prisma.salidaTour.update({ where: { id }, data });
  }

  /** Crea la traducción base 'es' y las automáticas (Google Translate). */
  private async generarTraducciones(
    tipo: 'transporte' | 'tour',
    id: string,
    contenido: ContenidoEntrada,
  ) {
    await this.guardarTraduccion(tipo, id, 'es', contenido, 'PUBLICADA');
    for (const idioma of IDIOMAS_DESTINO) {
      const traducido = await this.traduccion.traducirCampos(
        {
          titulo: contenido.titulo,
          resumen: contenido.resumen,
          descripcion: contenido.descripcion,
          ...(contenido.queLlevar ? { queLlevar: contenido.queLlevar } : {}),
        },
        'es',
        idioma,
      );
      await this.guardarTraduccion(tipo, id, idioma, traducido, 'PUBLICADA');
    }
  }

  listarTraducciones(tipo: 'transporte' | 'tour', id: string) {
    return tipo === 'transporte'
      ? this.prisma.traduccionTransporte.findMany({
          where: { transporteId: id },
          orderBy: { idioma: 'asc' },
        })
      : this.prisma.traduccionTour.findMany({
          where: { tourId: id },
          orderBy: { idioma: 'asc' },
        });
  }

  /** Crea o actualiza (edición manual) la traducción de un idioma. */
  guardarTraduccion(
    tipo: 'transporte' | 'tour',
    id: string,
    idioma: string,
    contenido: Partial<ContenidoEntrada> & {
      titulo?: string;
      resumen?: string;
      descripcion?: string;
      queLlevar?: string;
    },
    estado: 'BORRADOR' | 'PUBLICADA' = 'PUBLICADA',
  ) {
    const campos = {
      titulo: contenido.titulo ?? '',
      resumen: contenido.resumen ?? '',
      descripcion: contenido.descripcion ?? '',
      estado: estado as EstadoTraduccion,
    };
    if (tipo === 'transporte') {
      return this.prisma.traduccionTransporte.upsert({
        where: { transporteId_idioma: { transporteId: id, idioma } },
        create: { transporteId: id, idioma, ...campos },
        update: campos,
      });
    }
    return this.prisma.traduccionTour.upsert({
      where: { tourId_idioma: { tourId: id, idioma } },
      create: { tourId: id, idioma, ...campos, queLlevar: contenido.queLlevar },
      update: { ...campos, queLlevar: contenido.queLlevar },
    });
  }

  async definirParadas(
    transporteId: string,
    paradas: {
      nombre: string;
      latitud: number;
      longitud: number;
      minutos: number;
      duracionParadaMinutos?: number;
      descripcion?: string;
    }[],
  ) {
    const transporte = await this.prisma.transporte.findUnique({
      where: { id: transporteId },
    });
    if (!transporte) throw new NotFoundException('Transporte no encontrado');

    await this.prisma.$transaction([
      this.prisma.paradaTransporte.deleteMany({ where: { transporteId } }),
      this.prisma.paradaTransporte.createMany({
        data: paradas.map((parada, indice) => ({
          transporteId,
          orden: indice + 1,
          nombre: parada.nombre,
          latitud: new Prisma.Decimal(parada.latitud),
          longitud: new Prisma.Decimal(parada.longitud),
          minutos: parada.minutos,
          duracionParadaMinutos: parada.duracionParadaMinutos ?? 0,
          descripcion: parada.descripcion,
        })),
      }),
    ]);
    return this.prisma.paradaTransporte.findMany({
      where: { transporteId },
      orderBy: { orden: 'asc' },
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
