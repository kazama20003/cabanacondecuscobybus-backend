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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const EsLatitud = () => [(0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(-90), (0, class_validator_1.Max)(90)];
const EsLongitud = () => [(0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(-180), (0, class_validator_1.Max)(180)];
function aplicar(decoradores) {
    return (target, key) => decoradores.forEach((d) => d(target, key));
}
const paginacion_1 = require("../../../compartido/paginacion");
const roles_1 = require("../../autenticacion/presentacion/roles");
const catalogo_service_1 = require("../aplicacion/catalogo.service");
class FiltrosTransportesDto extends paginacion_1.PaginacionDto {
    origen;
    destino;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FiltrosTransportesDto.prototype, "origen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FiltrosTransportesDto.prototype, "destino", void 0);
class FiltrosToursDto extends paginacion_1.PaginacionDto {
    destino;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FiltrosToursDto.prototype, "destino", void 0);
class ContenidoDto {
    titulo;
    resumen;
    descripcion;
    queLlevar;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContenidoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContenidoDto.prototype, "resumen", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContenidoDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContenidoDto.prototype, "queLlevar", void 0);
class EditarTraduccionDto {
    titulo;
    resumen;
    descripcion;
    queLlevar;
    estado;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditarTraduccionDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditarTraduccionDto.prototype, "resumen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditarTraduccionDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EditarTraduccionDto.prototype, "queLlevar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['BORRADOR', 'PUBLICADA']),
    __metadata("design:type", String)
], EditarTraduccionDto.prototype, "estado", void 0);
class MedioDto {
    url;
    textoAlterno;
    tipo;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedioDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedioDto.prototype, "textoAlterno", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['IMAGEN', 'VIDEO']),
    __metadata("design:type", String)
], MedioDto.prototype, "tipo", void 0);
class ParadaDto {
    nombre;
    latitud;
    longitud;
    minutos;
    duracionParadaMinutos;
    descripcion;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ParadaDto.prototype, "nombre", void 0);
__decorate([
    aplicar(EsLatitud()),
    __metadata("design:type", Number)
], ParadaDto.prototype, "latitud", void 0);
__decorate([
    aplicar(EsLongitud()),
    __metadata("design:type", Number)
], ParadaDto.prototype, "longitud", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ParadaDto.prototype, "minutos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ParadaDto.prototype, "duracionParadaMinutos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ParadaDto.prototype, "descripcion", void 0);
class CrearTransporteDto {
    slug;
    origenNombre;
    origenLatitud;
    origenLongitud;
    destinoNombre;
    destinoLatitud;
    destinoLongitud;
    duracionMinutosEstimada;
    paradas;
    medios;
    contenido;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTransporteDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTransporteDto.prototype, "origenNombre", void 0);
__decorate([
    aplicar(EsLatitud()),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "origenLatitud", void 0);
__decorate([
    aplicar(EsLongitud()),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "origenLongitud", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTransporteDto.prototype, "destinoNombre", void 0);
__decorate([
    aplicar(EsLatitud()),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "destinoLatitud", void 0);
__decorate([
    aplicar(EsLongitud()),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "destinoLongitud", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "duracionMinutosEstimada", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ParadaDto),
    __metadata("design:type", Array)
], CrearTransporteDto.prototype, "paradas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedioDto),
    __metadata("design:type", Array)
], CrearTransporteDto.prototype, "medios", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContenidoDto),
    __metadata("design:type", ContenidoDto)
], CrearTransporteDto.prototype, "contenido", void 0);
class CrearTourDto {
    slug;
    destinoNombre;
    destinoLatitud;
    destinoLongitud;
    duracionMinutos;
    medios;
    contenido;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTourDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTourDto.prototype, "destinoNombre", void 0);
__decorate([
    aplicar(EsLatitud()),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "destinoLatitud", void 0);
__decorate([
    aplicar(EsLongitud()),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "destinoLongitud", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "duracionMinutos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedioDto),
    __metadata("design:type", Array)
], CrearTourDto.prototype, "medios", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContenidoDto),
    __metadata("design:type", ContenidoDto)
], CrearTourDto.prototype, "contenido", void 0);
class DefinirParadasDto {
    paradas;
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ParadaDto),
    __metadata("design:type", Array)
], DefinirParadasDto.prototype, "paradas", void 0);
class ItemItinerarioDto {
    titulo;
    descripcion;
    latitud;
    longitud;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemItinerarioDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemItinerarioDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    aplicar(EsLatitud()),
    __metadata("design:type", Number)
], ItemItinerarioDto.prototype, "latitud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    aplicar(EsLongitud()),
    __metadata("design:type", Number)
], ItemItinerarioDto.prototype, "longitud", void 0);
class DefinirItinerarioDto {
    items;
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ItemItinerarioDto),
    __metadata("design:type", Array)
], DefinirItinerarioDto.prototype, "items", void 0);
class FiltrosSalidasDto extends paginacion_1.PaginacionDto {
    tipo;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['TRANSPORTE', 'TOUR']),
    __metadata("design:type", String)
], FiltrosSalidasDto.prototype, "tipo", void 0);
class ActualizarSalidaDto {
    estado;
    vehiculoId;
    capacidad;
    precioPen;
    precioUsd;
    fechaHoraSalida;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([
        'BORRADOR',
        'A_LA_VENTA',
        'PENDIENTE_DE_MINIMO',
        'CONFIRMADA',
        'EN_CURSO',
        'FINALIZADA',
        'CANCELADA',
    ]),
    __metadata("design:type", String)
], ActualizarSalidaDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ActualizarSalidaDto.prototype, "vehiculoId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ActualizarSalidaDto.prototype, "capacidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ActualizarSalidaDto.prototype, "precioPen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ActualizarSalidaDto.prototype, "precioUsd", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ActualizarSalidaDto.prototype, "fechaHoraSalida", void 0);
class CrearSalidaDto {
    fechaHoraSalida;
    capacidad;
    minimoPasajeros;
    precioPen;
    precioUsd;
}
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CrearSalidaDto.prototype, "fechaHoraSalida", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearSalidaDto.prototype, "capacidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearSalidaDto.prototype, "minimoPasajeros", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CrearSalidaDto.prototype, "precioPen", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CrearSalidaDto.prototype, "precioUsd", void 0);
let CatalogoController = class CatalogoController {
    servicio;
    constructor(servicio) {
        this.servicio = servicio;
    }
    transportes(filtros) {
        return this.servicio.listarTransportes(filtros, filtros.origen, filtros.destino);
    }
    buscar(origen, destino, fecha, pasajeros) {
        return this.servicio.buscarSalidasTransporte(origen, destino, new Date(fecha), Number(pasajeros));
    }
    transporte(slug, idioma = 'es') {
        return this.servicio.obtenerTransporte(slug, idioma);
    }
    tours(filtros) {
        return this.servicio.listarTours(filtros, filtros.destino);
    }
    tour(slug, idioma = 'es') {
        return this.servicio.obtenerTour(slug, idioma);
    }
    crearTransporte(datos) {
        return this.servicio.crearTransporte(datos);
    }
    crearTour(datos) {
        return this.servicio.crearTour(datos);
    }
    listarTraducciones(tipo, id) {
        return this.servicio.listarTraducciones(tipo === 'tours' ? 'tour' : 'transporte', id);
    }
    editarTraduccion(tipo, id, idioma, datos) {
        return this.servicio.guardarTraduccion(tipo === 'tours' ? 'tour' : 'transporte', id, idioma, datos, datos.estado ?? 'PUBLICADA');
    }
    definirItinerario(tourId, datos) {
        return this.servicio.definirItinerario(tourId, datos.items);
    }
    listarSalidas(filtros) {
        return this.servicio.listarSalidasAdmin(filtros, filtros.tipo ?? 'TRANSPORTE');
    }
    actualizarSalida(tipoSalida, id, cambios) {
        return this.servicio.actualizarSalida(tipoSalida === 'tour' ? 'TOUR' : 'TRANSPORTE', id, {
            ...cambios,
            fechaHoraSalida: cambios.fechaHoraSalida
                ? new Date(cambios.fechaHoraSalida)
                : undefined,
        });
    }
    definirParadas(transporteId, datos) {
        return this.servicio.definirParadas(transporteId, datos.paradas);
    }
    crearSalidaTransporte(transporteId, datos) {
        return this.servicio.crearSalidaTransporte({
            ...datos,
            transporteId,
            fechaHoraSalida: new Date(datos.fechaHoraSalida),
        });
    }
    crearSalidaTour(tourId, datos) {
        return this.servicio.crearSalidaTour({
            ...datos,
            tourId,
            fechaHoraSalida: new Date(datos.fechaHoraSalida),
        });
    }
};
exports.CatalogoController = CatalogoController;
__decorate([
    (0, common_1.Get)('transportes'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FiltrosTransportesDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "transportes", null);
__decorate([
    (0, common_1.Get)('transportes/buscar'),
    __param(0, (0, common_1.Query)('origen')),
    __param(1, (0, common_1.Query)('destino')),
    __param(2, (0, common_1.Query)('fecha')),
    __param(3, (0, common_1.Query)('pasajeros')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)('transportes/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('idioma')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "transporte", null);
__decorate([
    (0, common_1.Get)('tours'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FiltrosToursDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "tours", null);
__decorate([
    (0, common_1.Get)('tours/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('idioma')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "tour", null);
__decorate([
    (0, common_1.Post)('administracion/transportes'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearTransporteDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearTransporte", null);
__decorate([
    (0, common_1.Post)('administracion/tours'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearTourDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearTour", null);
__decorate([
    (0, common_1.Get)('administracion/:tipo/:id/traducciones'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('tipo')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "listarTraducciones", null);
__decorate([
    (0, common_1.Put)('administracion/:tipo/:id/traducciones/:idioma'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('tipo')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('idioma')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, EditarTraduccionDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "editarTraduccion", null);
__decorate([
    (0, common_1.Post)('administracion/tours/:id/itinerario'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DefinirItinerarioDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "definirItinerario", null);
__decorate([
    (0, common_1.Get)('administracion/salidas'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FiltrosSalidasDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "listarSalidas", null);
__decorate([
    (0, common_1.Patch)('administracion/salidas/:tipoSalida/:id'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('tipoSalida')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ActualizarSalidaDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "actualizarSalida", null);
__decorate([
    (0, common_1.Post)('administracion/transportes/:id/paradas'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DefinirParadasDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "definirParadas", null);
__decorate([
    (0, common_1.Post)('administracion/transportes/:id/salidas'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CrearSalidaDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearSalidaTransporte", null);
__decorate([
    (0, common_1.Post)('administracion/tours/:id/salidas'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CrearSalidaDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearSalidaTour", null);
exports.CatalogoController = CatalogoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [catalogo_service_1.CatalogoService])
], CatalogoController);
//# sourceMappingURL=catalogo.controller.js.map