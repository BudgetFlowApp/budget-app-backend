import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenusModule } from './revenus/revenus.module';
import { DepensesReellesModule } from './depenses-reelles/depenses-reelles.module';
import { DepensesPrevuesModule } from './depenses-prevues/depenses-prevues.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),

    RevenusModule, 
    DepensesReellesModule, 
    DepensesPrevuesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
