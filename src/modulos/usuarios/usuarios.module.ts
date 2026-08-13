import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { UsuariosService } from './aplicacion/usuarios.service';
import { UsuariosController } from './presentacion/usuarios.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, GuardiaRoles],
})
export class UsuariosModule {}
