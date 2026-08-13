import { Global, Module } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';

@Global()
@Module({
  providers: [TraduccionService],
  exports: [TraduccionService],
})
export class TraduccionModule {}
