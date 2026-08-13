import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
  applyDecorators,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GuardiaJwt } from './guardia-jwt';

export type Rol = 'CLIENTE' | 'OPERADOR' | 'ADMINISTRADOR';

const CLAVE_ROLES = 'roles_permitidos';

@Injectable()
export class GuardiaRoles implements CanActivate {
  constructor(
    private readonly guardiaJwt: GuardiaJwt,
    private readonly reflector: Reflector,
  ) {}

  canActivate(contexto: ExecutionContext): boolean {
    this.guardiaJwt.canActivate(contexto);
    const rolesPermitidos = this.reflector.getAllAndOverride<Rol[]>(
      CLAVE_ROLES,
      [contexto.getHandler(), contexto.getClass()],
    );
    if (!rolesPermitidos?.length) return true;

    const usuario = contexto
      .switchToHttp()
      .getRequest<{ usuario: { rol: Rol } }>().usuario;
    if (!rolesPermitidos.includes(usuario.rol)) {
      throw new ForbiddenException(
        `Requiere uno de los roles: ${rolesPermitidos.join(', ')}`,
      );
    }
    return true;
  }
}

/** Protege la ruta y exige uno de los roles indicados. */
export function Roles(...roles: Rol[]) {
  return applyDecorators(SetMetadata(CLAVE_ROLES, roles), UseGuards(GuardiaRoles));
}
