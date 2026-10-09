import { Module } from '@nestjs/common';
import { DepensesReellesService } from './depenses-reelles.service';
import { DepensesReellesController } from './depenses-reelles.controller';
import { DepensesReelle } from './entities/depenses-reelle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DepensesReelle])],
  controllers: [DepensesReellesController],
  providers: [DepensesReellesService],
})
export class DepensesReellesModule {}
