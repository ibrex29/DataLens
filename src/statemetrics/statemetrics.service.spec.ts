import { Test, TestingModule } from '@nestjs/testing';
import { StatemetricsService } from './statemetrics.service';

describe('StatemetricsService', () => {
  let service: StatemetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatemetricsService],
    }).compile();

    service = module.get<StatemetricsService>(StatemetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
