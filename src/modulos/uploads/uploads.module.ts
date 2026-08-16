import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaRoles } from '../autenticacion/presentacion/roles';
import { UploadsService } from './aplicacion/uploads.service';
import { UploadsController } from './presentacion/uploads.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [UploadsController],
  providers: [UploadsService, GuardiaRoles],
  exports: [UploadsService],
})
export class UploadsModule {}
