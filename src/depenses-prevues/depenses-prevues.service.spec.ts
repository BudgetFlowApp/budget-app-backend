import { Test, TestingModule } from '@nestjs/testing';
import { DepensesPrevuesService } from './depenses-prevues.service';

describe('DepensesPrevuesService', () => {
  let service: DepensesPrevuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepensesPrevuesService],
    }).compile();

    service = module.get<DepensesPrevuesService>(DepensesPrevuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
