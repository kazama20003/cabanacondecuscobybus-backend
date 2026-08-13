import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LimpiezaService } from './limpieza.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [LimpiezaService],
})
export class LimpiezaModule {}
