import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GuardiaJwt implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  canActivate(contexto: ExecutionContext): boolean {
    const solicitud = contexto.switchToHttp().getRequest<{
      headers: Record<string, string>;
      usuario?: { id: string; rol: string };
    }>();
    const token = solicitud.headers.authorization?.replace('Bearer ', '');
    if (!token) throw new UnauthorizedException();
    try {
      const datos = this.jwt.verify<{ sub: string; rol: string }>(token);
      solicitud.usuario = { id: datos.sub, rol: datos.rol };
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
