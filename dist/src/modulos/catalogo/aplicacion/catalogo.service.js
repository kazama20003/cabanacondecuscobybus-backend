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
const prisma_service_1 = require("../../../compartido/prisma/prisma.service");
let CatalogoService = class CatalogoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    listarTransportes(origen, destino) {
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
                traducciones: { where: { estado: client_1.EstadoTraduccion.PUBLICADA } },
                paradas: { orderBy: { orden: 'asc' } },
            },
        });
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
    listarTours(destino) {
        return this.prisma.tour.findMany({
            where: {
                activo: true,
                ...(destino
                    ? { destinoNombre: { contains: destino, mode: 'insensitive' } }
                    : {}),
            },
            include: {
                traducciones: { where: { estado: client_1.EstadoTraduccion.PUBLICADA } },
                imagenes: { orderBy: { orden: 'asc' } },
            },
        });
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
    crearTransporte(datos) {
        return this.prisma.transporte.create({
            data: {
                ...datos,
                origenLatitud: new client_1.Prisma.Decimal(datos.origenLatitud),
                origenLongitud: new client_1.Prisma.Decimal(datos.origenLongitud),
                destinoLatitud: new client_1.Prisma.Decimal(datos.destinoLatitud),
                destinoLongitud: new client_1.Prisma.Decimal(datos.destinoLongitud),
            },
        });
    }
    crearTour(datos) {
        return this.prisma.tour.create({
            data: {
                ...datos,
                destinoLatitud: new client_1.Prisma.Decimal(datos.destinoLatitud),
                destinoLongitud: new client_1.Prisma.Decimal(datos.destinoLongitud),
            },
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatalogoService);
//# sourceMappingURL=catalogo.service.js.map