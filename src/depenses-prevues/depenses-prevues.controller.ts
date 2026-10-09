import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DepensesPrevuesService } from './depenses-prevues.service';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
import { DepensesPrevue } from './entities/depenses-prevue.entity';

@Controller('depenses-prevues')
export class DepensesPrevuesController {
  constructor(private readonly depensesPrevuesService: DepensesPrevuesService) {}

  @Post()
  create(@Body() createDepensesPrevueDto: CreateDepensesPrevueDto): Promise<DepensesPrevue> {
    return this.depensesPrevuesService.create(createDepensesPrevueDto);
  }

  @Get('all')
  findAll(): Promise<DepensesPrevue[]> {
    return this.depensesPrevuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<DepensesPrevue> {
    return this.depensesPrevuesService.findOne(id);
  }

  @Get('categorie/:annee/:mois/:categorie')
  findByAnneeMoisCategorie(@Param('annee') annee: number, @Param('mois') mois: string, @Param('categorie') categorie: string): Promise<DepensesPrevue> {
    return this.depensesPrevuesService.findByAnneeMoisCategorie(annee, mois,categorie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDepensesPrevueDto: UpdateDepensesPrevueDto): Promise<DepensesPrevue> {
    return this.depensesPrevuesService.update(id, updateDepensesPrevueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DepensesPrevue> {
    return this.depensesPrevuesService.remove(id);
  }
}
