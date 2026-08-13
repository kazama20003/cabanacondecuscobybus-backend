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
exports.ArchivosController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const roles_1 = require("../../autenticacion/presentacion/roles");
const archivos_service_1 = require("../aplicacion/archivos.service");
class CrearCargaDto {
    nombreArchivo;
    tipoContenido;
    categoria;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearCargaDto.prototype, "nombreArchivo", void 0);
__decorate([
    (0, class_validator_1.IsIn)([
        'image/jpeg',
        'image/png',
        'image/webp',
        'video/mp4',
        'video/webm',
        'video/quicktime',
    ]),
    __metadata("design:type", String)
], CrearCargaDto.prototype, "tipoContenido", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['transportes', 'tours', 'comprobantes']),
    __metadata("design:type", String)
], CrearCargaDto.prototype, "categoria", void 0);
let ArchivosController = class ArchivosController {
    servicio;
    constructor(servicio) {
        this.servicio = servicio;
    }
    crearCarga(datos) {
        return this.servicio.crearCarga(datos.nombreArchivo, datos.tipoContenido, datos.categoria);
    }
    crearCargaImagen(datos) {
        return this.servicio.crearCarga(datos.nombreArchivo, datos.tipoContenido, datos.categoria);
    }
};
exports.ArchivosController = ArchivosController;
__decorate([
    (0, common_1.Post)('cargas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearCargaDto]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "crearCarga", null);
__decorate([
    (0, common_1.Post)('cargas-imagen'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearCargaDto]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "crearCargaImagen", null);
exports.ArchivosController = ArchivosController = __decorate([
    (0, common_1.Controller)('administracion/archivos'),
    (0, roles_1.Roles)('ADMINISTRADOR', 'OPERADOR'),
    __metadata("design:paramtypes", [archivos_service_1.ArchivosService])
], ArchivosController);
//# sourceMappingURL=archivos.controller.js.map