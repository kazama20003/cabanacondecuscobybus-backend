import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaAdministrador } from '../autenticacion/presentacion/guardia-administrador';
import { ArchivosService } from './aplicacion/archivos.service';
import { ArchivosController } from './presentacion/archivos.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [ArchivosController],
  providers: [ArchivosService, GuardiaAdministrador],
})
export class ArchivosModule {}
