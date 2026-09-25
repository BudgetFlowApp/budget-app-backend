import { Test, TestingModule } from '@nestjs/testing';
import { DepensesReellesService } from './depenses-reelles.service';

describe('DepensesReellesService', () => {
  let service: DepensesReellesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepensesReellesService],
    }).compile();

    service = module.get<DepensesReellesService>(DepensesReellesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
