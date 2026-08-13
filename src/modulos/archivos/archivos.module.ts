import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { ArchivosService } from './aplicacion/archivos.service';
import { ArchivosController } from './presentacion/archivos.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [ArchivosController],
  providers: [ArchivosService, GuardiaRoles],
})
export class ArchivosModule {}

