import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { RolUsuario } from '@prisma/client';
import { AuditoriaService } from '../../../compartido/auditoria/auditoria.service';
import { PaginacionDto } from '../../../compartido/paginacion';
import { Roles } from '../../autenticacion/presentacion/roles';
import { UsuarioActual } from '../../autenticacion/presentacion/usuario-actual';
import { UsuariosService } from '../aplicacion/usuarios.service';

class ActualizarUsuarioDto {
  @IsOptional() @IsEnum(RolUsuario) rol?: RolUsuario;
  @IsOptional() @IsBoolean() activo?: boolean;
}
class FiltrosUsuariosDto extends PaginacionDto {
  @IsOptional() @IsEnum(RolUsuario) rol?: RolUsuario;
  @IsOptional() @IsString() buscar?: string;
}

@Controller('administracion/usuarios')
@Roles('ADMINISTRADOR')
export class UsuariosController {
  constructor(
    private readonly servicio: UsuariosService,
    private readonly auditoria: AuditoriaService,
  ) {}

  @Get()
  listar(@Query() filtros: FiltrosUsuariosDto) {
    return this.servicio.listar(filtros, {
      rol: filtros.rol,
      buscar: filtros.buscar,
    });
  }

  @Patch(':id')
  async actualizar(
    @Param('id') id: string,
    @Body() cambios: ActualizarUsuarioDto,
    @UsuarioActual() solicitante: { id: string },
  ) {
    const actualizado = await this.servicio.actualizar(id, cambios, solicitante.id);
    await this.auditoria.registrar({
      usuarioId: solicitante.id,
      accion: 'ACTUALIZAR',
      entidad: 'USUARIO',
      entidadId: id,
      descripcion: `Actualizó un usuario${cambios.rol ? ` (rol → ${cambios.rol})` : ''}${cambios.activo === false ? ' (desactivado)' : cambios.activo === true ? ' (activado)' : ''}`,
      detalle: { cambios: cambios as unknown as Record<string, unknown> },
    });
    return actualizado;
  }
}
