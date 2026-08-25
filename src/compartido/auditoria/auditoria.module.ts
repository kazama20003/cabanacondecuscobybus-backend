import { Global, Module } from '@nestjs/common';
import { AutenticacionModule } from '../../modulos/autenticacion/autenticacion.module';
import { GuardiaRoles } from '../../modulos/autenticacion/presentacion/roles';
import { AuditoriaController } from './auditoria.controller';
import { AuditoriaService } from './auditoria.service';

/** Global: cualquier módulo puede inyectar AuditoriaService sin importarlo. */
@Global()
@Module({
  imports: [AutenticacionModule],
  controllers: [AuditoriaController],
  providers: [AuditoriaService, GuardiaRoles],
  exports: [AuditoriaService],
})
export class AuditoriaModule {}
