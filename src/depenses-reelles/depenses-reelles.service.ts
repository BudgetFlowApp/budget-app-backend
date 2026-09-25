import { Injectable } from '@nestjs/common';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';

@Injectable()
export class DepensesReellesService {
  create(createDepensesReelleDto: CreateDepensesReelleDto) {
    return 'This action adds a new depensesReelle';
  }

  findAll() {
    return `This action returns all depensesReelles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depensesReelle`;
  }

  update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto) {
    return `This action updates a #${id} depensesReelle`;
  }

  remove(id: number) {
    return `This action removes a #${id} depensesReelle`;
  }
}
