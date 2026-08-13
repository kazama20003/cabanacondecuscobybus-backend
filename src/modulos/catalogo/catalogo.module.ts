import { Module } from '@nestjs/common';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { GuardiaAdministrador } from '../autenticacion/presentacion/guardia-administrador';
import { CatalogoService } from './aplicacion/catalogo.service';
import { CatalogoController } from './presentacion/catalogo.controller';

@Module({
  imports: [AutenticacionModule],
  controllers: [CatalogoController],
  providers: [CatalogoService, GuardiaAdministrador],
})
export class CatalogoModule {}
