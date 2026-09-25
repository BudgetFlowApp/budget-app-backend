import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepensesPrevuesService } from './depenses-prevues.service';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';

@Controller('depenses-prevues')
export class DepensesPrevuesController {
  constructor(private readonly depensesPrevuesService: DepensesPrevuesService) {}

  @Post()
  create(@Body() createDepensesPrevueDto: CreateDepensesPrevueDto) {
    return this.depensesPrevuesService.create(createDepensesPrevueDto);
  }

  @Get()
  findAll() {
    return this.depensesPrevuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depensesPrevuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepensesPrevueDto: UpdateDepensesPrevueDto) {
    return this.depensesPrevuesService.update(+id, updateDepensesPrevueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depensesPrevuesService.remove(+id);
  }
}
