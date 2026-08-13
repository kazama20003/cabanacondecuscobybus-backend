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
const class_validator_1 = require("class-validator");
const guardia_administrador_1 = require("../../autenticacion/presentacion/guardia-administrador");
const catalogo_service_1 = require("../aplicacion/catalogo.service");
class CrearTransporteDto {
    slug;
    origenNombre;
    origenLatitud;
    origenLongitud;
    destinoNombre;
    destinoLatitud;
    destinoLongitud;
    duracionMinutosEstimada;
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
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "origenLatitud", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "origenLongitud", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearTransporteDto.prototype, "destinoNombre", void 0);
__decorate([
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "destinoLatitud", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "destinoLongitud", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearTransporteDto.prototype, "duracionMinutosEstimada", void 0);
class CrearTourDto {
    slug;
    destinoNombre;
    destinoLatitud;
    destinoLongitud;
    duracionMinutos;
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
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "destinoLatitud", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "destinoLongitud", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CrearTourDto.prototype, "duracionMinutos", void 0);
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
    transportes(origen, destino) {
        return this.servicio.listarTransportes(origen, destino);
    }
    buscar(origen, destino, fecha, pasajeros) {
        return this.servicio.buscarSalidasTransporte(origen, destino, new Date(fecha), Number(pasajeros));
    }
    transporte(slug, idioma = 'es') {
        return this.servicio.obtenerTransporte(slug, idioma);
    }
    tours(destino) {
        return this.servicio.listarTours(destino);
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
    __param(0, (0, common_1.Query)('origen')),
    __param(1, (0, common_1.Query)('destino')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
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
    __param(0, (0, common_1.Query)('destino')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
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
    (0, common_1.UseGuards)(guardia_administrador_1.GuardiaAdministrador),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearTransporteDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearTransporte", null);
__decorate([
    (0, common_1.Post)('administracion/tours'),
    (0, common_1.UseGuards)(guardia_administrador_1.GuardiaAdministrador),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearTourDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearTour", null);
__decorate([
    (0, common_1.Post)('administracion/transportes/:id/salidas'),
    (0, common_1.UseGuards)(guardia_administrador_1.GuardiaAdministrador),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CrearSalidaDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "crearSalidaTransporte", null);
__decorate([
    (0, common_1.Post)('administracion/tours/:id/salidas'),
    (0, common_1.UseGuards)(guardia_administrador_1.GuardiaAdministrador),
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