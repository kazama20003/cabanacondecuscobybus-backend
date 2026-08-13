"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const paginacion_1 = require("../../../compartido/paginacion");
const prisma_service_1 = require("../../../compartido/prisma/prisma.service");
const traduccion_service_1 = require("../../../compartido/traduccion/traduccion.service");
const IDIOMAS_DESTINO = ['en'];
let CatalogoService = class CatalogoService {
    prisma;
    traduccion;
    constructor(prisma, traduccion) {
        this.prisma = prisma;
        this.traduccion = traduccion;
    }
    async listarTransportes(paginacion, origen, destino) {
        const { skip, take, pagina, porPagina } = (0, paginacion_1.rangoPaginacion)(paginacion);
        const where = {
            activo: true,
            ...(origen
                ? { origenNombre: { contains: origen, mode: 'insensitive' } }
                : {}),
            ...(destino
                ? { destinoNombre: { contains: destino, mode: 'insensitive' } }
                : {}),
        };
        const [datos, total] = await this.prisma.$transaction([
            this.prisma.transporte.findMany({
                where,
                include: {
                    traducciones: { where: { estado: client_1.EstadoTraduccion.PUBLICADA } },
                    paradas: { orderBy: { orden: 'asc' } },
                    salidas: { orderBy: { fechaHoraSalida: 'asc' } },
                },
                orderBy: { creadoEn: 'desc' },
                skip,
                take,
            }),
            this.prisma.transporte.count({ where }),
        ]);
        return (0, paginacion_1.construirPaginado)(datos, total, pagina, porPagina);
    }
    async obtenerTransporte(slug, idioma) {
        const transporte = await this.prisma.transporte.findFirst({
            where: { slug, activo: true },
            include: {
                paradas: { orderBy: { orden: 'asc' } },
                imagenes: { orderBy: { orden: 'asc' } },
                traducciones: { where: { idioma, estado: client_1.EstadoTraduccion.PUBLICADA } },
            },
        });
        if (!transporte)
            throw new common_1.NotFoundException('Transporte no encontrado');
        return transporte;
    }
    async listarTours(paginacion, destino) {
        const { skip, take, pagina, porPagina } = (0, paginacion_1.rangoPaginacion)(paginacion);
        const where = {
            activo: true,
            ...(destino
                ? { destinoNombre: { contains: destino, mode: 'insensitive' } }
                : {}),
        };
        const [datos, total] = await this.prisma.$transaction([
            this.prisma.tour.findMany({
                where,
                include: {
                    traducciones: { where: { estado: client_1.EstadoTraduccion.PUBLICADA } },
                    imagenes: { orderBy: { orden: 'asc' } },
                    salidas: { orderBy: { fechaHoraSalida: 'asc' } },
                },
                orderBy: { creadoEn: 'desc' },
                skip,
                take,
            }),
            this.prisma.tour.count({ where }),
        ]);
        return (0, paginacion_1.construirPaginado)(datos, total, pagina, porPagina);
    }
    async obtenerTour(slug, idioma) {
        const tour = await this.prisma.tour.findFirst({
            where: { slug, activo: true },
            include: {
                itinerarios: { orderBy: { orden: 'asc' } },
                imagenes: { orderBy: { orden: 'asc' } },
                traducciones: { where: { idioma, estado: client_1.EstadoTraduccion.PUBLICADA } },
            },
        });
        if (!tour)
            throw new common_1.NotFoundException('Tour no encontrado');
        return tour;
    }
    buscarSalidasTransporte(origen, destino, fecha, pasajeros) {
        const inicio = new Date(fecha);
        inicio.setHours(0, 0, 0, 0);
        const fin = new Date(inicio);
        fin.setDate(fin.getDate() + 1);
        return this.prisma.salidaTransporte.findMany({
            where: {
                fechaHoraSalida: { gte: inicio, lt: fin },
                estado: {
                    in: [
                        client_1.EstadoSalida.A_LA_VENTA,
                        client_1.EstadoSalida.PENDIENTE_DE_MINIMO,
                        client_1.EstadoSalida.CONFIRMADA,
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
    async crearTransporte(datos) {
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
    crearTransporteBase(base, paradas, medios) {
        return this.prisma.transporte.create({
            data: {
                ...base,
                origenLatitud: new client_1.Prisma.Decimal(base.origenLatitud),
                origenLongitud: new client_1.Prisma.Decimal(base.origenLongitud),
                destinoLatitud: new client_1.Prisma.Decimal(base.destinoLatitud),
                destinoLongitud: new client_1.Prisma.Decimal(base.destinoLongitud),
                paradas: paradas?.length
                    ? {
                        create: paradas.map((parada, indice) => ({
                            orden: indice + 1,
                            nombre: parada.nombre,
                            latitud: new client_1.Prisma.Decimal(parada.latitud),
                            longitud: new client_1.Prisma.Decimal(parada.longitud),
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
                            tipo: medio.tipo ?? client_1.TipoMedio.IMAGEN,
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
    async crearTour(datos) {
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
    crearTourBase(base, medios) {
        return this.prisma.tour.create({
            data: {
                ...base,
                destinoLatitud: new client_1.Prisma.Decimal(base.destinoLatitud),
                destinoLongitud: new client_1.Prisma.Decimal(base.destinoLongitud),
                imagenes: medios?.length
                    ? {
                        create: medios.map((medio, indice) => ({
                            url: medio.url,
                            textoAlterno: medio.textoAlterno,
                            tipo: medio.tipo ?? client_1.TipoMedio.IMAGEN,
                            orden: indice,
                        })),
                    }
                    : undefined,
            },
            include: { imagenes: { orderBy: { orden: 'asc' } } },
        });
    }
    async definirItinerario(tourId, items) {
        const tour = await this.prisma.tour.findUnique({ where: { id: tourId } });
        if (!tour)
            throw new common_1.NotFoundException('Tour no encontrado');
        await this.prisma.$transaction([
            this.prisma.itinerarioTour.deleteMany({ where: { tourId } }),
            this.prisma.itinerarioTour.createMany({
                data: items.map((item, indice) => ({
                    tourId,
                    orden: indice + 1,
                    titulo: item.titulo,
                    descripcion: item.descripcion,
                    latitud: item.latitud !== undefined ? new client_1.Prisma.Decimal(item.latitud) : null,
                    longitud: item.longitud !== undefined
                        ? new client_1.Prisma.Decimal(item.longitud)
                        : null,
                })),
            }),
        ]);
        return this.prisma.itinerarioTour.findMany({
            where: { tourId },
            orderBy: { orden: 'asc' },
        });
    }
    async listarSalidasAdmin(paginacion, tipo) {
        const { skip, take, pagina, porPagina } = (0, paginacion_1.rangoPaginacion)(paginacion);
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
            return (0, paginacion_1.construirPaginado)(datos.map((s) => ({
                ...s,
                ocupados: s.reservas.reduce((n, r) => n + r.cantidadPasajeros, 0),
                reservas: undefined,
            })), total, pagina, porPagina);
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
        return (0, paginacion_1.construirPaginado)(datos.map((s) => ({
            ...s,
            ocupados: s.reservas.reduce((n, r) => n + r.cantidadPasajeros, 0),
            reservas: undefined,
        })), total, pagina, porPagina);
    }
    async actualizarSalida(tipo, id, cambios) {
        const data = {
            estado: cambios.estado,
            capacidad: cambios.capacidad,
            precioPen: cambios.precioPen !== undefined
                ? new client_1.Prisma.Decimal(cambios.precioPen)
                : undefined,
            precioUsd: cambios.precioUsd !== undefined
                ? new client_1.Prisma.Decimal(cambios.precioUsd)
                : undefined,
            fechaHoraSalida: cambios.fechaHoraSalida,
        };
        if (tipo === 'TRANSPORTE') {
            const salida = await this.prisma.salidaTransporte.findUnique({
                where: { id },
            });
            if (!salida)
                throw new common_1.NotFoundException('Salida no encontrada');
            return this.prisma.salidaTransporte.update({
                where: { id },
                data: { ...data, vehiculoId: cambios.vehiculoId },
            });
        }
        const salida = await this.prisma.salidaTour.findUnique({ where: { id } });
        if (!salida)
            throw new common_1.NotFoundException('Salida no encontrada');
        return this.prisma.salidaTour.update({ where: { id }, data });
    }
    async generarTraducciones(tipo, id, contenido) {
        await this.guardarTraduccion(tipo, id, 'es', contenido, 'PUBLICADA');
        for (const idioma of IDIOMAS_DESTINO) {
            const traducido = await this.traduccion.traducirCampos({
                titulo: contenido.titulo,
                resumen: contenido.resumen,
                descripcion: contenido.descripcion,
                ...(contenido.queLlevar ? { queLlevar: contenido.queLlevar } : {}),
            }, 'es', idioma);
            await this.guardarTraduccion(tipo, id, idioma, traducido, 'PUBLICADA');
        }
    }
    listarTraducciones(tipo, id) {
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
    guardarTraduccion(tipo, id, idioma, contenido, estado = 'PUBLICADA') {
        const campos = {
            titulo: contenido.titulo ?? '',
            resumen: contenido.resumen ?? '',
            descripcion: contenido.descripcion ?? '',
            estado: estado,
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
    async definirParadas(transporteId, paradas) {
        const transporte = await this.prisma.transporte.findUnique({
            where: { id: transporteId },
        });
        if (!transporte)
            throw new common_1.NotFoundException('Transporte no encontrado');
        await this.prisma.$transaction([
            this.prisma.paradaTransporte.deleteMany({ where: { transporteId } }),
            this.prisma.paradaTransporte.createMany({
                data: paradas.map((parada, indice) => ({
                    transporteId,
                    orden: indice + 1,
                    nombre: parada.nombre,
                    latitud: new client_1.Prisma.Decimal(parada.latitud),
                    longitud: new client_1.Prisma.Decimal(parada.longitud),
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
    crearSalidaTransporte(datos) {
        return this.prisma.salidaTransporte.create({
            data: {
                ...datos,
                minimoPasajeros: datos.minimoPasajeros ?? 2,
                precioPen: new client_1.Prisma.Decimal(datos.precioPen),
                precioUsd: new client_1.Prisma.Decimal(datos.precioUsd),
                estado: client_1.EstadoSalida.A_LA_VENTA,
            },
        });
    }
    crearSalidaTour(datos) {
        return this.prisma.salidaTour.create({
            data: {
                ...datos,
                minimoPasajeros: datos.minimoPasajeros ?? 1,
                precioPen: new client_1.Prisma.Decimal(datos.precioPen),
                precioUsd: new client_1.Prisma.Decimal(datos.precioUsd),
                estado: client_1.EstadoSalida.A_LA_VENTA,
            },
        });
    }
};
exports.CatalogoService = CatalogoService;
exports.CatalogoService = CatalogoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        traduccion_service_1.TraduccionService])
], CatalogoService);
//# sourceMappingURL=catalogo.service.js.map