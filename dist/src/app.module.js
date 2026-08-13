"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const autenticacion_module_1 = require("./modulos/autenticacion/autenticacion.module");
const archivos_module_1 = require("./modulos/archivos/archivos.module");
const catalogo_module_1 = require("./modulos/catalogo/catalogo.module");
const pagos_module_1 = require("./modulos/pagos/pagos.module");
const reservas_module_1 = require("./modulos/reservas/reservas.module");
const usuarios_module_1 = require("./modulos/usuarios/usuarios.module");
const limpieza_module_1 = require("./compartido/limpieza/limpieza.module");
const prisma_module_1 = require("./compartido/prisma/prisma.module");
const traduccion_module_1 = require("./compartido/traduccion/traduccion.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            limpieza_module_1.LimpiezaModule,
            traduccion_module_1.TraduccionModule,
            autenticacion_module_1.AutenticacionModule,
            archivos_module_1.ArchivosModule,
            catalogo_module_1.CatalogoModule,
            pagos_module_1.PagosModule,
            reservas_module_1.ReservasModule,
            usuarios_module_1.UsuariosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map