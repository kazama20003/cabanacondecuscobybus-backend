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
exports.ReservasController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
const guardia_administrador_1 = require("../../autenticacion/presentacion/guardia-administrador");
const guardia_jwt_1 = require("../../autenticacion/presentacion/guardia-jwt");
const usuario_actual_1 = require("../../autenticacion/presentacion/usuario-actual");
const reservas_service_1 = require("../aplicacion/reservas.service");
class PasajeroDto {
    nombres;
    apellidos;
    nacionalidad;
    tipoDocumento;
    numeroDocumento;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PasajeroDto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PasajeroDto.prototype, "apellidos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PasajeroDto.prototype, "nacionalidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PasajeroDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PasajeroDto.prototype, "numeroDocumento", void 0);
class CrearReservaDto {
    tipoServicio;
    salidaId;
    correoContacto;
    telefonoWhatsApp;
    paisResidencia;
    moneda;
    pasajeros;
    codigoPromocion;
}
__decorate([
    (0, class_validator_1.IsEnum)(['TRANSPORTE', 'TOUR']),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "tipoServicio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "salidaId", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "correoContacto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "telefonoWhatsApp", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "paisResidencia", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Moneda),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "moneda", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PasajeroDto),
    __metadata("design:type", Array)
], CrearReservaDto.prototype, "pasajeros", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CrearReservaDto.prototype, "codigoPromocion", void 0);
class ComprobanteSaldoDto {
    codigoOperacion;
    urlComprobante;
    metodo;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComprobanteSaldoDto.prototype, "codigoOperacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComprobanteSaldoDto.prototype, "urlComprobante", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.MetodoPago),
    __metadata("design:type", String)
], ComprobanteSaldoDto.prototype, "metodo", void 0);
let ReservasController = class ReservasController {
    servicio;
    guardiaJwt;
    constructor(servicio, guardiaJwt) {
        this.servicio = servicio;
        this.guardiaJwt = guardiaJwt;
    }
    crear(datos, solicitud) {
        let usuarioId;
        try {
            this.guardiaJwt.canActivate({
                switchToHttp: () => ({ getRequest: () => solicitud }),
            });
            usuarioId = solicitud.usuario?.id;
        }
        catch { }
        return this.servicio.crear({ ...datos, usuarioId });
    }
    misReservas(usuario) {
        return this.servicio.misReservas(usuario.id);
    }
    verInvitado(codigo, token) {
        return this.servicio.verInvitado(codigo, token);
    }
    iniciarPago(codigo) {
        return this.servicio.iniciarPagoAdelanto(codigo);
    }
    subirComprobante(codigo, token, datos) {
        return this.servicio.registrarComprobanteSaldo(codigo, token, datos);
    }
    confirmarPago(pagoId, usuario) {
        return this.servicio.confirmarPago(pagoId, usuario.id);
    }
};
exports.ReservasController = ReservasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearReservaDto, Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)('mias'),
    (0, common_1.UseGuards)(guardia_jwt_1.GuardiaJwt),
    __param(0, (0, usuario_actual_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "misReservas", null);
__decorate([
    (0, common_1.Get)(':codigo'),
    __param(0, (0, common_1.Param)('codigo')),
    __param(1, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "verInvitado", null);
__decorate([
    (0, common_1.Post)(':codigo/iniciar-pago-adelanto'),
    __param(0, (0, common_1.Param)('codigo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "iniciarPago", null);
__decorate([
    (0, common_1.Post)(':codigo/comprobantes-saldo'),
    __param(0, (0, common_1.Param)('codigo')),
    __param(1, (0, common_1.Query)('token')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ComprobanteSaldoDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "subirComprobante", null);
__decorate([
    (0, common_1.Post)('administracion/pagos/:pagoId/confirmar'),
    (0, common_1.UseGuards)(guardia_administrador_1.GuardiaAdministrador),
    __param(0, (0, common_1.Param)('pagoId')),
    __param(1, (0, usuario_actual_1.UsuarioActual)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "confirmarPago", null);
exports.ReservasController = ReservasController = __decorate([
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reservas_service_1.ReservasService,
        guardia_jwt_1.GuardiaJwt])
], ReservasController);
//# sourceMappingURL=reservas.controller.js.map