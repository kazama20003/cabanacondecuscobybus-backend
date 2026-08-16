import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { UploadsModule } from '../uploads/uploads.module';
import { CatalogoService } from './aplicacion/catalogo.service';
import { CatalogoController } from './presentacion/catalogo.controller';

@Module({
  imports: [AutenticacionModule, UploadsModule],
  controllers: [CatalogoController],
  providers: [CatalogoService, GuardiaRoles],
})
export class CatalogoModule {}

