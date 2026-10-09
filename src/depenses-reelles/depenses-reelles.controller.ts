import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DepensesReellesService } from './depenses-reelles.service';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
import { DepensesReelle } from './entities/depenses-reelle.entity';

@Controller('depenses-reelles')
export class DepensesReellesController {
  constructor(private readonly depensesReellesService: DepensesReellesService) {}

  @Post()
  create(@Body() createDepensesReelleDto: CreateDepensesReelleDto): Promise<DepensesReelle> {
    return this.depensesReellesService.create(createDepensesReelleDto);
  }

  @Get('all')
  findAll(): Promise<DepensesReelle[]> {
    return this.depensesReellesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<DepensesReelle> {
    return this.depensesReellesService.findOne(id);
  }

  @Get('categorie/:annee/:mois/:categorie')
  findByAnneeMoisCategorie(@Param('annee') annee: number, @Param('mois') mois: string, @Param('categorie') categorie: string): Promise<DepensesReelle> {
    return this.depensesReellesService.findByAnneeMoisCategorie(annee, mois, categorie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDepensesReelleDto: UpdateDepensesReelleDto): Promise<DepensesReelle> {
    return this.depensesReellesService.update(id, updateDepensesReelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DepensesReelle> {
    return this.depensesReellesService.remove(id);
  }
}
