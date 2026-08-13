import { Module } from '@nestjs/common';
import { IzipayService } from './aplicacion/izipay.service';
import { PagosService } from './aplicacion/pagos.service';
import { PagosController } from './presentacion/pagos.controller';

@Module({
  controllers: [PagosController],
  providers: [PagosService, IzipayService],
  exports: [IzipayService],
})
export class PagosModule {}
