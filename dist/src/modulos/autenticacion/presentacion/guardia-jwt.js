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
exports.GuardiaJwt = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let GuardiaJwt = class GuardiaJwt {
    jwt;
    constructor(jwt) {
        this.jwt = jwt;
    }
    canActivate(contexto) {
        const solicitud = contexto.switchToHttp().getRequest();
        const token = solicitud.headers.authorization?.replace('Bearer ', '');
        if (!token)
            throw new common_1.UnauthorizedException();
        try {
            const datos = this.jwt.verify(token);
            solicitud.usuario = { id: datos.sub, rol: datos.rol };
            return true;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.GuardiaJwt = GuardiaJwt;
exports.GuardiaJwt = GuardiaJwt = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], GuardiaJwt);
//# sourceMappingURL=guardia-jwt.js.map