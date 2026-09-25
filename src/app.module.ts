import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenusModule } from './revenus/revenus.module';
import { DepensesReellesModule } from './depenses-reelles/depenses-reelles.module';
import { DepensesPrevuesModule } from './depenses-prevues/depenses-prevues.module';

@Module({
  imports: [RevenusModule, DepensesReellesModule, DepensesPrevuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
