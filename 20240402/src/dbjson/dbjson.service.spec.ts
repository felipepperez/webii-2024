import { Test, TestingModule } from '@nestjs/testing';
import { DbjsonService } from './dbjson.service';

describe('DbjsonService', () => {
  let service: DbjsonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbjsonService],
    }).compile();

    service = module.get<DbjsonService>(DbjsonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
