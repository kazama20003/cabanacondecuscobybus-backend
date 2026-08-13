"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../../../compartido/prisma/prisma.service");
let AutenticacionService = class AutenticacionService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async registrar(datos) {
        const existe = await this.prisma.usuario.findUnique({
            where: { correo: datos.correo.toLowerCase() },
        });
        if (existe)
            throw new common_1.ConflictException('El correo ya está registrado');
        const usuario = await this.prisma.usuario.create({
            data: {
                correo: datos.correo.toLowerCase(),
                contrasenaHash: await bcrypt.hash(datos.contrasena, 12),
                nombres: datos.nombres,
                apellidos: datos.apellidos,
                telefonoWhatsApp: datos.telefonoWhatsApp,
                paisResidencia: datos.paisResidencia,
            },
        });
        return this.respuestaSesion(usuario);
    }
    async iniciarSesion(correo, contrasena) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { correo: correo.toLowerCase() },
        });
        if (!usuario ||
            !usuario.activo ||
            !(await bcrypt.compare(contrasena, usuario.contrasenaHash))) {
            throw new common_1.UnauthorizedException('Correo o contraseña incorrectos');
        }
        return this.respuestaSesion(usuario);
    }
    async perfil(id) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
            select: {
                id: true,
                correo: true,
                nombres: true,
                apellidos: true,
                telefonoWhatsApp: true,
                paisResidencia: true,
                rol: true,
            },
        });
        if (!usuario)
            throw new common_1.UnauthorizedException();
        return usuario;
    }
    respuestaSesion(usuario) {
        return {
            tokenAcceso: this.jwt.sign({
                sub: usuario.id,
                correo: usuario.correo,
                rol: usuario.rol,
            }),
            usuario: { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
        };
    }
};
exports.AutenticacionService = AutenticacionService;
exports.AutenticacionService = AutenticacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AutenticacionService);
//# sourceMappingURL=autenticacion.service.js.map