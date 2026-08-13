import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import type { StringValue } from 'ms';
import { AutenticacionController } from './presentacion/autenticacion.controller';
import { AutenticacionService } from './aplicacion/autenticacion.service';
import { GuardiaJwt } from './presentacion/guardia-jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configuracion: ConfigService) => ({
        secret: configuracion.getOrThrow<string>('JWT_SECRETO'),
        signOptions: {
          expiresIn: configuracion.get<string>(
            'JWT_DURACION',
            '7d',
          ) as StringValue,
        },
      }),
    }),
  ],
  controllers: [AutenticacionController],
  providers: [AutenticacionService, GuardiaJwt],
  exports: [AutenticacionService, JwtModule, GuardiaJwt],
})
export class AutenticacionModule {}
