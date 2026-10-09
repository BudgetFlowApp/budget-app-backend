import { Module } from '@nestjs/common';
import { DepensesPrevuesService } from './depenses-prevues.service';
import { DepensesPrevuesController } from './depenses-prevues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepensesPrevue } from './entities/depenses-prevue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepensesPrevue])],
  controllers: [DepensesPrevuesController],
  providers: [DepensesPrevuesService],
})
export class DepensesPrevuesModule {}
