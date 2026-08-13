"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const autenticacion_controller_1 = require("./presentacion/autenticacion.controller");
const autenticacion_service_1 = require("./aplicacion/autenticacion.service");
const guardia_jwt_1 = require("./presentacion/guardia-jwt");
let AutenticacionModule = class AutenticacionModule {
};
exports.AutenticacionModule = AutenticacionModule;
exports.AutenticacionModule = AutenticacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configuracion) => ({
                    secret: configuracion.getOrThrow('JWT_SECRETO'),
                    signOptions: {
                        expiresIn: configuracion.get('JWT_DURACION', '7d'),
                    },
                }),
            }),
        ],
        controllers: [autenticacion_controller_1.AutenticacionController],
        providers: [autenticacion_service_1.AutenticacionService, guardia_jwt_1.GuardiaJwt],
        exports: [autenticacion_service_1.AutenticacionService, jwt_1.JwtModule, guardia_jwt_1.GuardiaJwt],
    })
], AutenticacionModule);
//# sourceMappingURL=autenticacion.module.js.map