import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacionModule } from './modulos/autenticacion/autenticacion.module';
import { UploadsModule } from './modulos/uploads/uploads.module';
import { CatalogoModule } from './modulos/catalogo/catalogo.module';
import { PagosModule } from './modulos/pagos/pagos.module';
import { PromocionesModule } from './modulos/promociones/promociones.module';
import { ReservasModule } from './modulos/reservas/reservas.module';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { LimpiezaModule } from './compartido/limpieza/limpieza.module';
import { PrismaModule } from './compartido/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    LimpiezaModule,
    AutenticacionModule,
    UploadsModule,
    CatalogoModule,
    PagosModule,
    PromocionesModule,
    ReservasModule,
    UsuariosModule,
  ],
})
export class AppModule {}
