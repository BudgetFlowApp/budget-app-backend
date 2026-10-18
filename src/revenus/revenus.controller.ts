import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RevenusService } from './revenus.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import { Revenu } from './entities/revenu.entity';

@Controller('revenus')
export class RevenusController {
  constructor(private readonly revenusService: RevenusService) {}

  @Post()
  create(@Body() createRevenuDto: CreateRevenuDto): Promise<Revenu> {
    return this.revenusService.create(createRevenuDto);
  }

  @Get('all')
  findAll(): Promise<Revenu[]> {
    return this.revenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Revenu> {
    return this.revenusService.findOne(id);
  }

  @Get('sum-all-revenus/:annee/:mois')
  sumAllRevenus(@Param('annee') annee: number, @Param('mois') mois: string): Promise<number> {
    return this.revenusService.sumAllRevenus(annee, mois);
  }
  @Get('all-categories-revenus/:annee/:mois')
  findAllCategories(@Param('annee') annee: number, @Param('mois') mois: string): Promise<string[]> {
    return this.revenusService.findAllCategories(annee, mois);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRevenuDto: UpdateRevenuDto): Promise<Revenu> {
    return this.revenusService.update(id, updateRevenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Revenu> {
    return this.revenusService.remove(id);
  }
}
