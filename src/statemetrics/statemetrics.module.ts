import { Module } from '@nestjs/common';
import { StatemetricsService } from './statemetrics.service';
import { StatemetricsController } from './statemetrics.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [StatemetricsController],
  providers: [StatemetricsService,PrismaService],
})
export class StatemetricsModule {}
