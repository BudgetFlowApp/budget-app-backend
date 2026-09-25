import { Module } from '@nestjs/common';
import { DepensesReellesService } from './depenses-reelles.service';
import { DepensesReellesController } from './depenses-reelles.controller';

@Module({
  controllers: [DepensesReellesController],
  providers: [DepensesReellesService],
})
export class DepensesReellesModule {}
