import { Test, TestingModule } from '@nestjs/testing';
import { DepensesPrevuesController } from './depenses-prevues.controller';
import { DepensesPrevuesService } from './depenses-prevues.service';

describe('DepensesPrevuesController', () => {
  let controller: DepensesPrevuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepensesPrevuesController],
      providers: [DepensesPrevuesService],
    }).compile();

    controller = module.get<DepensesPrevuesController>(DepensesPrevuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
