import { Module } from '@nestjs/common';
import { DepensesPrevuesService } from './depenses-prevues.service';
import { DepensesPrevuesController } from './depenses-prevues.controller';

@Module({
  controllers: [DepensesPrevuesController],
  providers: [DepensesPrevuesService],
})
export class DepensesPrevuesModule {}
