import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacionModule } from './modulos/autenticacion/autenticacion.module';
import { ArchivosModule } from './modulos/archivos/archivos.module';
import { CatalogoModule } from './modulos/catalogo/catalogo.module';
import { PagosModule } from './modulos/pagos/pagos.module';
import { ReservasModule } from './modulos/reservas/reservas.module';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { LimpiezaModule } from './compartido/limpieza/limpieza.module';
import { PrismaModule } from './compartido/prisma/prisma.module';
import { TraduccionModule } from './compartido/traduccion/traduccion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    LimpiezaModule,
    TraduccionModule,
    AutenticacionModule,
    ArchivosModule,
    CatalogoModule,
    PagosModule,
    ReservasModule,
    UsuariosModule,
  ],
})
export class AppModule {}

