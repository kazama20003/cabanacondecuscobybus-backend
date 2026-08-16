import { Module } from '@nestjs/common';
import { NotificacionesModule } from '../../compartido/notificaciones/notificaciones.module';
import { IzipayService } from './aplicacion/izipay.service';
import { PagosService } from './aplicacion/pagos.service';
import { PagosController } from './presentacion/pagos.controller';

@Module({
  imports: [NotificacionesModule],
  controllers: [PagosController],
  providers: [PagosService, IzipayService],
  exports: [IzipayService],
})
export class PagosModule {}
