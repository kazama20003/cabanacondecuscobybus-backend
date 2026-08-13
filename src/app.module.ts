import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutenticacionModule } from './modulos/autenticacion/autenticacion.module';
import { ArchivosModule } from './modulos/archivos/archivos.module';
import { CatalogoModule } from './modulos/catalogo/catalogo.module';
import { ReservasModule } from './modulos/reservas/reservas.module';
import { PrismaModule } from './compartido/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AutenticacionModule,
    ArchivosModule,
    CatalogoModule,
    ReservasModule,
  ],
})
export class AppModule {}
