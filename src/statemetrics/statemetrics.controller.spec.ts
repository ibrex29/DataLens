import { Test, TestingModule } from '@nestjs/testing';
import { StatemetricsController } from './statemetrics.controller';
import { StatemetricsService } from './statemetrics.service';

describe('StatemetricsController', () => {
  let controller: StatemetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatemetricsController],
      providers: [StatemetricsService],
    }).compile();

    controller = module.get<StatemetricsController>(StatemetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
