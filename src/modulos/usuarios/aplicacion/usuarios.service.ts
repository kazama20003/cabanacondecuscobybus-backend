import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RolUsuario } from '@prisma/client';
import {
  construirPaginado,
  PaginacionDto,
  rangoPaginacion,
} from '../../../compartido/paginacion';
import { PrismaService } from '../../../compartido/prisma/prisma.service';

const SELECCION_USUARIO = {
  id: true,
  correo: true,
  nombres: true,
  apellidos: true,
  telefonoWhatsApp: true,
  paisResidencia: true,
  rol: true,
  activo: true,
  creadoEn: true,
} as const;

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async listar(
    paginacion: PaginacionDto,
    filtros: { rol?: RolUsuario; buscar?: string },
  ) {
    const { skip, take, pagina, porPagina } = rangoPaginacion(paginacion);
    const where = {
      rol: filtros.rol,
      OR: filtros.buscar
        ? [
            {
              correo: {
                contains: filtros.buscar,
                mode: 'insensitive' as const,
              },
            },
            {
              nombres: {
                contains: filtros.buscar,
                mode: 'insensitive' as const,
              },
            },
            {
              apellidos: {
                contains: filtros.buscar,
                mode: 'insensitive' as const,
              },
            },
          ]
        : undefined,
    };
    const [datos, total] = await this.prisma.$transaction([
      this.prisma.usuario.findMany({
        where,
        select: SELECCION_USUARIO,
        orderBy: { creadoEn: 'desc' },
        skip,
        take,
      }),
      this.prisma.usuario.count({ where }),
    ]);
    return construirPaginado(datos, total, pagina, porPagina);
  }

  async actualizar(
    id: string,
    cambios: { rol?: RolUsuario; activo?: boolean },
    solicitanteId: string,
  ) {
    if (id === solicitanteId && (cambios.rol || cambios.activo === false)) {
      throw new ForbiddenException(
        'No puedes cambiar tu propio rol ni desactivarte',
      );
    }
    const existe = await this.prisma.usuario.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.usuario.update({
      where: { id },
      data: { rol: cambios.rol, activo: cambios.activo },
      select: SELECCION_USUARIO,
    });
  }
}
