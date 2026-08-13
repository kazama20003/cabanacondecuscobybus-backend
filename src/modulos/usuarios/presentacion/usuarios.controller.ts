import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { RolUsuario } from '@prisma/client';
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
  constructor(private readonly servicio: UsuariosService) {}

  @Get()
  listar(@Query() filtros: FiltrosUsuariosDto) {
    return this.servicio.listar(filtros, {
      rol: filtros.rol,
      buscar: filtros.buscar,
    });
  }

  @Patch(':id')
  actualizar(
    @Param('id') id: string,
    @Body() cambios: ActualizarUsuarioDto,
    @UsuarioActual() solicitante: { id: string },
  ) {
    return this.servicio.actualizar(id, cambios, solicitante.id);
  }
}
