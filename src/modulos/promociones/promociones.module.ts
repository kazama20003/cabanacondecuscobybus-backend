import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { PromocionesService } from './aplicacion/promociones.service';
import { PromocionesController } from './presentacion/promociones.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [PromocionesController],
  providers: [PromocionesService, GuardiaRoles],
  exports: [PromocionesService],
})
export class PromocionesModule {}
