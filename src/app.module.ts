import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatemetricsModule } from './statemetrics/statemetrics.module';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [StatemetricsModule, FacilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
