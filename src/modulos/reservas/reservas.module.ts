import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaAdministrador } from '../autenticacion/presentacion/guardia-administrador';
import { ReservasService } from './aplicacion/reservas.service';
import { ReservasController } from './presentacion/reservas.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [ReservasController],
  providers: [ReservasService, GuardiaAdministrador],
})
export class ReservasModule {}
