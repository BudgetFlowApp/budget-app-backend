import { Test, TestingModule } from '@nestjs/testing';
import { DepensesReellesController } from './depenses-reelles.controller';
import { DepensesReellesService } from './depenses-reelles.service';

describe('DepensesReellesController', () => {
  let controller: DepensesReellesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepensesReellesController],
      providers: [DepensesReellesService],
    }).compile();

    controller = module.get<DepensesReellesController>(DepensesReellesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
