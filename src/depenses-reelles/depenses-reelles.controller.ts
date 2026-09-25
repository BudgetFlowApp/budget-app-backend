import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepensesReellesService } from './depenses-reelles.service';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';

@Controller('depenses-reelles')
export class DepensesReellesController {
  constructor(private readonly depensesReellesService: DepensesReellesService) {}

  @Post()
  create(@Body() createDepensesReelleDto: CreateDepensesReelleDto) {
    return this.depensesReellesService.create(createDepensesReelleDto);
  }

  @Get()
  findAll() {
    return this.depensesReellesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depensesReellesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepensesReelleDto: UpdateDepensesReelleDto) {
    return this.depensesReellesService.update(+id, updateDepensesReelleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depensesReellesService.remove(+id);
  }
}
