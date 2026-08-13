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
exports.AutenticacionController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const autenticacion_service_1 = require("../aplicacion/autenticacion.service");
const guardia_jwt_1 = require("../presentacion/guardia-jwt");
const usuario_actual_1 = require("../presentacion/usuario-actual");
class RegistroDto {
    correo;
    contrasena;
    nombres;
    apellidos;
    telefonoWhatsApp;
    paisResidencia;
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegistroDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], RegistroDto.prototype, "contrasena", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistroDto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistroDto.prototype, "apellidos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistroDto.prototype, "telefonoWhatsApp", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegistroDto.prototype, "paisResidencia", void 0);
class InicioSesionDto {
    correo;
    contrasena;
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], InicioSesionDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InicioSesionDto.prototype, "contrasena", void 0);
class InicioSesionGoogleDto {
    idToken;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    __metadata("design:type", String)
], InicioSesionGoogleDto.prototype, "idToken", void 0);
let AutenticacionController = class AutenticacionController {
    servicio;
    constructor(servicio) {
        this.servicio = servicio;
    }
    registrar(datos) {
        return this.servicio.registrar(datos);
    }
    iniciarSesion(datos) {
        return this.servicio.iniciarSesion(datos.correo, datos.contrasena);
    }
    iniciarSesionGoogle(datos) {
        return this.servicio.iniciarSesionGoogle(datos.idToken);
    }
    perfil(usuario) {
        return this.servicio.perfil(usuario.id);
    }
};
exports.AutenticacionController = AutenticacionController;
__decorate([
    (0, common_1.Post)('registro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegistroDto]),
    __metadata("design:returntype", void 0)
], AutenticacionController.prototype, "registrar", null);
__decorate([
    (0, common_1.Post)('inicio-sesion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InicioSesionDto]),
    __metadata("design:returntype", void 0)
], AutenticacionController.prototype, "iniciarSesion", null);
__decorate([
    (0, common_1.Post)('google'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InicioSesionGoogleDto]),
    __metadata("design:returntype", void 0)
], AutenticacionController.prototype, "iniciarSesionGoogle", null);
__decorate([
    (0, common_1.Get)('mi-perfil'),
    (0, common_1.UseGuards)(guardia_jwt_1.GuardiaJwt),
    __param(0, (0, usuario_actual_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutenticacionController.prototype, "perfil", null);
exports.AutenticacionController = AutenticacionController = __decorate([
    (0, common_1.Controller)('autenticacion'),
    __metadata("design:paramtypes", [autenticacion_service_1.AutenticacionService])
], AutenticacionController);
//# sourceMappingURL=autenticacion.controller.js.map