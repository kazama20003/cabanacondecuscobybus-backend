import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { UploadsModule } from '../uploads/uploads.module';
import { CatalogoService } from './aplicacion/catalogo.service';
import { PlantillasSalidaService } from './aplicacion/plantillas-salida.service';
import { CatalogoController } from './presentacion/catalogo.controller';

@Module({
  imports: [AutenticacionModule, UploadsModule],
  controllers: [CatalogoController],
  providers: [CatalogoService, PlantillasSalidaService, GuardiaRoles],
})
export class CatalogoModule {}

