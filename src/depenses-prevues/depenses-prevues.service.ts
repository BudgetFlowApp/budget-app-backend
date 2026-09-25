import { Injectable } from '@nestjs/common';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';

@Injectable()
export class DepensesPrevuesService {
  create(createDepensesPrevueDto: CreateDepensesPrevueDto) {
    return 'This action adds a new depensesPrevue';
  }

  findAll() {
    return `This action returns all depensesPrevues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depensesPrevue`;
  }

  update(id: number, updateDepensesPrevueDto: UpdateDepensesPrevueDto) {
    return `This action updates a #${id} depensesPrevue`;
  }

  remove(id: number) {
    return `This action removes a #${id} depensesPrevue`;
  }
}
