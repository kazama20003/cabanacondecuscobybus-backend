import { Module } from '@nestjs/common';
import { NotificacionesModule } from '../../compartido/notificaciones/notificaciones.module';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { PagosModule } from '../pagos/pagos.module';
import { PromocionesModule } from '../promociones/promociones.module';
import { GuardiaAdministrador } from '../autenticacion/presentacion/guardia-administrador';
import { ReservasService } from './aplicacion/reservas.service';
import { ReservasController } from './presentacion/reservas.controller';

@Module({
  imports: [AutenticacionModule, NotificacionesModule, PagosModule, PromocionesModule],
  controllers: [ReservasController],
  providers: [ReservasService, GuardiaAdministrador],
})
export class ReservasModule {}


