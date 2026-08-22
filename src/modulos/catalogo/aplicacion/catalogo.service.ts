import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
  medios?: MedioEntrada[];
}

interface MedioEntrada {
  url: string;
  clave?: string;
  textoAlterno?: string;
  tipo?: TipoMedio;
}
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../../../compartido/paginacion';
import { PrismaService } from '../../../compartido/prisma/prisma.service';
import { UploadsService } from '../../uploads/aplicacion/uploads.service';

interface ContenidoEntrada {
  titulo: string;
  resumen: string;
  descripcion: string;
  queLlevar?: string;
  incluye?: string;
  noIncluye?: string;
}

const IDIOMAS_CATALOGO = ['es', 'en', 'fr', 'it', 'pt', 'zh', 'ja', 'ru', 'de'];

@Injectable()
export class CatalogoService {
  private readonly logger = new Logger(CatalogoService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly uploads: UploadsService,
    private readonly configuracion: ConfigService,
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
          imagenes: { orderBy: { orden: 'asc' } },
          paradas: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
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
        paradas: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
      },
    });
    if (!transporte) throw new NotFoundException('Transporte no encontrado');
    const traduccion =
      transporte.traducciones.find((item) => item.idioma === idioma) ??
      transporte.traducciones.find((item) => item.idioma === 'es');
    const paradas = transporte.paradas.map((parada) => ({
      ...parada,
      nombre: this.elegirIdioma(parada.nombreI18n, idioma, parada.nombre),
      descripcion: this.elegirIdioma(parada.descripcionI18n, idioma, parada.descripcion),
    }));
    return { ...transporte, paradas, traducciones: traduccion ? [traduccion] : [] };
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
        itinerarios: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: { where: { estado: EstadoTraduccion.PUBLICADA } },
      },
    });
    if (!tour) throw new NotFoundException('Tour no encontrado');
    const traduccion =
      tour.traducciones.find((item) => item.idioma === idioma) ??
      tour.traducciones.find((item) => item.idioma === 'es');
    const itinerarios = tour.itinerarios.map((item) => ({
      ...item,
      titulo: this.elegirIdioma(item.tituloI18n, idioma, item.titulo),
      descripcion: this.elegirIdioma(item.descripcionI18n, idioma, item.descripcion),
    }));
    return { ...tour, itinerarios, traducciones: traduccion ? [traduccion] : [] };
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
        paradas: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: true,
      },
    });
  }

  private async crearTransporteBase(
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
    const nombresI18n = await this.construirI18n(
      paradas?.map((parada) => parada.nombre) ?? [],
    );
    const descripcionesI18n = await this.construirI18n(
      paradas?.map((parada) => parada.descripcion ?? '') ?? [],
    );
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
                nombreI18n: nombresI18n[indice],
                latitud: new Prisma.Decimal(parada.latitud),
                longitud: new Prisma.Decimal(parada.longitud),
                minutos: parada.minutos,
                duracionParadaMinutos: parada.duracionParadaMinutos ?? 0,
                descripcion: parada.descripcion,
                descripcionI18n: parada.descripcion ? descripcionesI18n[indice] : undefined,
                imagenes: parada.medios?.length
                  ? { create: parada.medios.map((medio, orden) => ({ ...medio, tipo: medio.tipo ?? TipoMedio.IMAGEN, orden })) }
                  : undefined,
              })),
            }
          : undefined,
        imagenes: medios?.length
          ? {
              create: medios.map((medio, indice) => ({
                url: medio.url,
                clave: medio.clave,
                textoAlterno: medio.textoAlterno,
                tipo: medio.tipo ?? TipoMedio.IMAGEN,
                orden: indice,
              })),
            }
          : undefined,
      },
      include: {
        paradas: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
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
                clave: medio.clave,
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

  async actualizarTransporte(
    id: string,
    datos: {
      slug?: string;
      origenNombre?: string;
      origenLatitud?: number;
      origenLongitud?: number;
      destinoNombre?: string;
      destinoLatitud?: number;
      destinoLongitud?: number;
      duracionMinutosEstimada?: number;
      medios?: MedioEntrada[];
      contenido?: ContenidoEntrada;
    },
  ) {
    const existente = await this.prisma.transporte.findUnique({ where: { id } });
    if (!existente) throw new NotFoundException('Transporte no encontrado');
    const { medios, contenido, ...base } = datos;

    await this.prisma.transporte.update({
      where: { id },
      data: {
        ...(base.slug !== undefined && { slug: base.slug }),
        ...(base.origenNombre !== undefined && { origenNombre: base.origenNombre }),
        ...(base.origenLatitud !== undefined && {
          origenLatitud: new Prisma.Decimal(base.origenLatitud),
        }),
        ...(base.origenLongitud !== undefined && {
          origenLongitud: new Prisma.Decimal(base.origenLongitud),
        }),
        ...(base.destinoNombre !== undefined && { destinoNombre: base.destinoNombre }),
        ...(base.destinoLatitud !== undefined && {
          destinoLatitud: new Prisma.Decimal(base.destinoLatitud),
        }),
        ...(base.destinoLongitud !== undefined && {
          destinoLongitud: new Prisma.Decimal(base.destinoLongitud),
        }),
        ...(base.duracionMinutosEstimada !== undefined && {
          duracionMinutosEstimada: base.duracionMinutosEstimada,
        }),
      },
    });

    if (medios !== undefined) {
      await this.reemplazarMedios('transporte', id, medios, 'transportes');
    }
    if (contenido) {
      await this.generarTraducciones('transporte', id, contenido);
    }
    return this.prisma.transporte.findUnique({
      where: { id },
      include: {
        paradas: { include: { imagenes: { orderBy: { orden: 'asc' } } }, orderBy: { orden: 'asc' } },
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: true,
      },
    });
  }

  async actualizarTour(
    id: string,
    datos: {
      slug?: string;
      destinoNombre?: string;
      destinoLatitud?: number;
      destinoLongitud?: number;
      duracionMinutos?: number;
      requiereGuia?: boolean;
      medios?: MedioEntrada[];
      contenido?: ContenidoEntrada;
    },
  ) {
    const existente = await this.prisma.tour.findUnique({ where: { id } });
    if (!existente) throw new NotFoundException('Tour no encontrado');
    const { medios, contenido, ...base } = datos;

    await this.prisma.tour.update({
      where: { id },
      data: {
        ...(base.slug !== undefined && { slug: base.slug }),
        ...(base.destinoNombre !== undefined && { destinoNombre: base.destinoNombre }),
        ...(base.destinoLatitud !== undefined && {
          destinoLatitud: new Prisma.Decimal(base.destinoLatitud),
        }),
        ...(base.destinoLongitud !== undefined && {
          destinoLongitud: new Prisma.Decimal(base.destinoLongitud),
        }),
        ...(base.duracionMinutos !== undefined && { duracionMinutos: base.duracionMinutos }),
        ...(base.requiereGuia !== undefined && { requiereGuia: base.requiereGuia }),
      },
    });

    if (medios !== undefined) {
      await this.reemplazarMedios('tour', id, medios, 'tours');
    }
    if (contenido) {
      await this.generarTraducciones('tour', id, contenido);
    }
    return this.prisma.tour.findUnique({
      where: { id },
      include: {
        imagenes: { orderBy: { orden: 'asc' } },
        traducciones: true,
      },
    });
  }

  /**
   * Reemplaza los medios de nivel principal (no toca los de paradas/itinerario).
   * Borra los anteriores en Cloudinary salvo los que se conservan por clave.
   */
  private async reemplazarMedios(
    tipo: 'transporte' | 'tour',
    id: string,
    medios: MedioEntrada[],
    categoria: 'transportes' | 'tours',
  ) {
    const where = tipo === 'transporte' ? { transporteId: id } : { tourId: id };
    const anteriores = await this.prisma.imagen.findMany({
      where,
      select: { clave: true, tipo: true },
    });
    await this.prisma.$transaction([
      this.prisma.imagen.deleteMany({ where }),
      ...medios.map((medio, orden) =>
        this.prisma.imagen.create({
          data: {
            ...(tipo === 'transporte' ? { transporteId: id } : { tourId: id }),
            url: medio.url,
            clave: medio.clave,
            textoAlterno: medio.textoAlterno,
            tipo: medio.tipo ?? TipoMedio.IMAGEN,
            orden,
          },
        }),
      ),
    ]);
    const conservadas = new Set(
      medios.map((medio) => medio.clave).filter((clave): clave is string => !!clave),
    );
    await Promise.all(
      anteriores
        .filter((imagen) => imagen.clave && !conservadas.has(imagen.clave))
        .map((imagen) =>
          this.uploads.eliminarSilenciosamente(imagen.clave, imagen.tipo, categoria),
        ),
    );
  }

  /** Define el itinerario completo del tour (reemplaza el set, orden = posición). */
  async definirItinerario(
    tourId: string,
      items: {
      titulo: string;
      descripcion: string;
      latitud?: number;
        longitud?: number;
        medios?: MedioEntrada[];
    }[],
  ) {
    const tour = await this.prisma.tour.findUnique({ where: { id: tourId } });
    if (!tour) throw new NotFoundException('Tour no encontrado');
    const imagenesAnteriores = await this.prisma.imagen.findMany({
      where: { itinerarioTour: { tourId } },
      select: { clave: true, tipo: true },
    });

    const titulosI18n = await this.construirI18n(
      items.map((item) => item.titulo),
    );
    const descripcionesI18n = await this.construirI18n(
      items.map((item) => item.descripcion),
    );

    await this.prisma.$transaction([
      this.prisma.itinerarioTour.deleteMany({ where: { tourId } }),
      ...items.map((item, indice) =>
        this.prisma.itinerarioTour.create({
          data: {
            tourId,
            orden: indice + 1,
            titulo: item.titulo,
            tituloI18n: titulosI18n[indice],
            descripcion: item.descripcion,
            descripcionI18n: descripcionesI18n[indice],
            latitud:
              item.latitud !== undefined ? new Prisma.Decimal(item.latitud) : null,
            longitud:
              item.longitud !== undefined
                ? new Prisma.Decimal(item.longitud)
                : null,
            imagenes: item.medios?.length
              ? { create: item.medios.map((medio, orden) => ({ ...medio, tipo: medio.tipo ?? TipoMedio.IMAGEN, orden })) }
              : undefined,
          },
        }),
      ),
    ]);
    const clavesConservadas = new Set(
      items.flatMap((item) => item.medios?.map((medio) => medio.clave) ?? []),
    );
    await Promise.all(
      imagenesAnteriores
        .filter((imagen) => imagen.clave && !clavesConservadas.has(imagen.clave))
        .map((imagen) => this.uploads.eliminarSilenciosamente(imagen.clave, imagen.tipo, 'tours')),
    );
    return this.prisma.itinerarioTour.findMany({
      where: { tourId },
      include: { imagenes: { orderBy: { orden: 'asc' } } },
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
      minimoPasajeros?: number;
      precioPen?: number;
      precioUsd?: number;
      fechaHoraSalida?: Date;
    },
  ) {
    const data = {
      estado: cambios.estado,
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

  /** Traduce y publica el contenido inicial en todos los idiomas soportados. */
  private async generarTraducciones(
    tipo: 'transporte' | 'tour',
    id: string,
    contenido: ContenidoEntrada,
  ) {
    await this.guardarTraduccion(tipo, id, 'es', contenido, 'PUBLICADA');
    await Promise.all(
      IDIOMAS_CATALOGO.filter((idioma) => idioma !== 'es').map(
        async (idioma) => {
          try {
            const traduccion = await this.traducirContenido(contenido, idioma);
            await this.guardarTraduccion(tipo, id, idioma, traduccion, 'PUBLICADA');
          } catch (error) {
            this.logger.error(`No se pudo traducir automáticamente al idioma ${idioma}`, error);
            await this.guardarTraduccion(tipo, id, idioma, contenido, 'BORRADOR');
          }
        },
      ),
    );
  }

  private async traducirContenido(contenido: ContenidoEntrada, idioma: string) {
    const textos = [
      contenido.titulo,
      contenido.resumen,
      contenido.descripcion,
      contenido.queLlevar ?? '',
      contenido.incluye ?? '',
      contenido.noIncluye ?? '',
    ];
    const traducciones = await this.traducirTextos(textos, idioma);
    return {
      titulo: traducciones[0],
      resumen: traducciones[1],
      descripcion: traducciones[2],
      queLlevar: traducciones[3] || undefined,
      incluye: traducciones[4] || undefined,
      noIncluye: traducciones[5] || undefined,
    };
  }

  /**
   * Traduce cada texto a todos los idiomas soportados y devuelve, por posición,
   * un mapa { idioma: traduccion } (incluye 'es' con el original). Si un idioma
   * falla, se omite y `elegirIdioma` caerá al valor en español.
   */
  private async construirI18n(
    textos: string[],
  ): Promise<(Record<string, string> | undefined)[]> {
    if (!textos.length) return [];
    const mapas: Record<string, string>[] = textos.map((texto) => ({ es: texto }));
    await Promise.all(
      IDIOMAS_CATALOGO.filter((idioma) => idioma !== 'es').map(async (idioma) => {
        try {
          const traducidos = await this.traducirTextos(textos, idioma);
          textos.forEach((_, indice) => {
            if (traducidos[indice]) mapas[indice][idioma] = traducidos[indice];
          });
        } catch (error) {
          this.logger.error(
            `No se pudieron traducir paradas/itinerarios al idioma ${idioma}`,
            error,
          );
        }
      }),
    );
    return mapas;
  }

  /** Devuelve el texto del idioma pedido desde un mapa JSON, con respaldo en español. */
  private elegirIdioma(
    mapa: Prisma.JsonValue | null | undefined,
    idioma: string,
    respaldo: string | null,
  ): string | null {
    if (mapa && typeof mapa === 'object' && !Array.isArray(mapa)) {
      const valor = (mapa as Record<string, unknown>)[idioma];
      if (typeof valor === 'string' && valor) return valor;
    }
    return respaldo;
  }

  private async traducirTextos(textos: string[], idioma: string): Promise<string[]> {
    const apiKey = this.configuracion.get<string>('GOOGLE_TRANSLATE_API_KEY');
    if (apiKey) {
      const respuesta = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ q: textos, source: 'es', target: idioma, format: 'text' }),
        },
      );
      if (!respuesta.ok) throw new Error(`Google Translate respondió ${respuesta.status}`);
      const datos = (await respuesta.json()) as {
        data?: { translations?: { translatedText: string }[] };
      };
      const traducciones = datos.data?.translations?.map((item) => item.translatedText);
      if (!traducciones || traducciones.length !== textos.length) {
        throw new Error('Google Translate devolvió una respuesta incompleta');
      }
      return traducciones;
    }

    return Promise.all(
      textos.map(async (texto) => {
        if (!texto) return '';
        const parametros = new URLSearchParams({
          client: 'gtx',
          sl: 'es',
          tl: idioma,
          dt: 't',
          q: texto,
        });
        const respuesta = await fetch(`https://translate.googleapis.com/translate_a/single?${parametros}`);
        if (!respuesta.ok) throw new Error(`Servicio de traducción respondió ${respuesta.status}`);
        const datos = (await respuesta.json()) as [Array<[string]>];
        return datos[0].map((fragmento) => fragmento[0]).join('');
      }),
    );
  }

  /**
   * Regenera nombreI18n/descripcionI18n de paradas e itinerarios cuya traducción
   * inline esté ausente (data creada antes de la migración i18n). Con `forzar`
   * vuelve a traducir todas las filas. Devuelve el conteo de filas actualizadas.
   */
  async rellenarI18nFaltante(forzar = false): Promise<{
    paradas: number;
    itinerarios: number;
  }> {
    const paradas = await this.prisma.paradaTransporte.findMany(
      forzar
        ? undefined
        : {
            where: {
              OR: [
                { nombreI18n: { equals: Prisma.DbNull } },
                { descripcion: { not: null }, descripcionI18n: { equals: Prisma.DbNull } },
              ],
            },
          },
    );
    for (const parada of paradas) {
      const textos = [parada.nombre, parada.descripcion ?? ''];
      const [nombreI18n, descripcionI18n] = await this.construirI18n(textos);
      await this.prisma.paradaTransporte.update({
        where: { id: parada.id },
        data: {
          nombreI18n: nombreI18n ?? Prisma.JsonNull,
          descripcionI18n: parada.descripcion
            ? (descripcionI18n ?? Prisma.JsonNull)
            : Prisma.DbNull,
        },
      });
      this.logger.log(`Parada ${parada.id} traducida (${parada.nombre})`);
    }

    const itinerarios = await this.prisma.itinerarioTour.findMany(
      forzar
        ? undefined
        : {
            where: {
              OR: [
                { tituloI18n: { equals: Prisma.DbNull } },
                { descripcionI18n: { equals: Prisma.DbNull } },
              ],
            },
          },
    );
    for (const itinerario of itinerarios) {
      const textos = [itinerario.titulo, itinerario.descripcion];
      const [tituloI18n, descripcionI18n] = await this.construirI18n(textos);
      await this.prisma.itinerarioTour.update({
        where: { id: itinerario.id },
        data: {
          tituloI18n: tituloI18n ?? Prisma.JsonNull,
          descripcionI18n: descripcionI18n ?? Prisma.JsonNull,
        },
      });
      this.logger.log(`Itinerario ${itinerario.id} traducido (${itinerario.titulo})`);
    }

    return { paradas: paradas.length, itinerarios: itinerarios.length };
  }

  async eliminarTransporte(id: string) {
    const transporte = await this.prisma.transporte.findUnique({
      where: { id },
      include: { imagenes: true, _count: { select: { salidas: true } } },
    });
    if (!transporte) throw new NotFoundException('Transporte no encontrado');
    if (transporte._count.salidas) {
      throw new ConflictException('No se puede eliminar un transporte con salidas registradas');
    }
    await this.prisma.transporte.delete({ where: { id } });
    await Promise.all(
      transporte.imagenes.map((imagen) =>
        this.uploads.eliminarSilenciosamente(imagen.clave, imagen.tipo, 'transportes'),
      ),
    );
    return { mensaje: 'Transporte eliminado' };
  }

  async eliminarTour(id: string) {
    const tour = await this.prisma.tour.findUnique({
      where: { id },
      include: { imagenes: true, _count: { select: { salidas: true } } },
    });
    if (!tour) throw new NotFoundException('Tour no encontrado');
    if (tour._count.salidas) {
      throw new ConflictException('No se puede eliminar un tour con salidas registradas');
    }
    await this.prisma.tour.delete({ where: { id } });
    await Promise.all(
      tour.imagenes.map((imagen) =>
        this.uploads.eliminarSilenciosamente(imagen.clave, imagen.tipo, 'tours'),
      ),
    );
    return { mensaje: 'Tour eliminado' };
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
      medios?: MedioEntrada[];
      queLlevar?: string;
    },
    estado: 'BORRADOR' | 'PUBLICADA' = 'PUBLICADA',
  ) {
    const campos = {
      titulo: contenido.titulo ?? '',
      resumen: contenido.resumen ?? '',
      descripcion: contenido.descripcion ?? '',
      incluye: contenido.incluye ?? null,
      noIncluye: contenido.noIncluye ?? null,
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
      medios?: MedioEntrada[];
    }[],
  ) {
    const transporte = await this.prisma.transporte.findUnique({
      where: { id: transporteId },
    });
    if (!transporte) throw new NotFoundException('Transporte no encontrado');
    const imagenesAnteriores = await this.prisma.imagen.findMany({
      where: { paradaTransporte: { transporteId } },
      select: { clave: true, tipo: true },
    });

    const nombresI18n = await this.construirI18n(
      paradas.map((parada) => parada.nombre),
    );
    const descripcionesI18n = await this.construirI18n(
      paradas.map((parada) => parada.descripcion ?? ''),
    );

    await this.prisma.$transaction([
      this.prisma.paradaTransporte.deleteMany({ where: { transporteId } }),
      ...paradas.map((parada, indice) =>
        this.prisma.paradaTransporte.create({
          data: {
            transporteId,
            orden: indice + 1,
            nombre: parada.nombre,
            nombreI18n: nombresI18n[indice],
            latitud: new Prisma.Decimal(parada.latitud),
            longitud: new Prisma.Decimal(parada.longitud),
            minutos: parada.minutos,
            duracionParadaMinutos: parada.duracionParadaMinutos ?? 0,
            descripcion: parada.descripcion,
            descripcionI18n: parada.descripcion ? descripcionesI18n[indice] : undefined,
            imagenes: parada.medios?.length
              ? { create: parada.medios.map((medio, orden) => ({ ...medio, tipo: medio.tipo ?? TipoMedio.IMAGEN, orden })) }
              : undefined,
          },
        }),
      ),
    ]);
    const clavesConservadas = new Set(
      paradas.flatMap((parada) => parada.medios?.map((medio) => medio.clave) ?? []),
    );
    await Promise.all(
      imagenesAnteriores
        .filter((imagen) => imagen.clave && !clavesConservadas.has(imagen.clave))
        .map((imagen) =>
          this.uploads.eliminarSilenciosamente(imagen.clave, imagen.tipo, 'transportes'),
        ),
    );
    return this.prisma.paradaTransporte.findMany({
      where: { transporteId },
      include: { imagenes: { orderBy: { orden: 'asc' } } },
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
