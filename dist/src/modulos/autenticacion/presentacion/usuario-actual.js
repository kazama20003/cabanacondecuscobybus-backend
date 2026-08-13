"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioActual = void 0;
const common_1 = require("@nestjs/common");
exports.UsuarioActual = (0, common_1.createParamDecorator)((_, contexto) => contexto
    .switchToHttp()
    .getRequest().usuario);
//# sourceMappingURL=usuario-actual.js.map