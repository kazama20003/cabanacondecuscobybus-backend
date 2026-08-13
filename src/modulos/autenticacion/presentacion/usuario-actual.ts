import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UsuarioActual = createParamDecorator(
  (_: unknown, contexto: ExecutionContext) =>
    contexto
      .switchToHttp()
      .getRequest<{ usuario: { id: string; rol: string } }>().usuario,
);
