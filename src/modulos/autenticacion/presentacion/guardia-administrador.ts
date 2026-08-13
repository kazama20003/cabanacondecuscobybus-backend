import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { GuardiaJwt } from './guardia-jwt';

@Injectable()
export class GuardiaAdministrador implements CanActivate {
  constructor(private readonly guardiaJwt: GuardiaJwt) {}
  canActivate(contexto: ExecutionContext): boolean {
    this.guardiaJwt.canActivate(contexto);
    const usuario = contexto
      .switchToHttp()
      .getRequest<{ usuario: { rol: string } }>().usuario;
    if (usuario.rol !== 'ADMINISTRADOR')
      throw new ForbiddenException('Requiere rol administrador');
    return true;
  }
}
