import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
export declare class DepensesPrevuesService {
    create(createDepensesPrevueDto: CreateDepensesPrevueDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDepensesPrevueDto: UpdateDepensesPrevueDto): string;
    remove(id: number): string;
}
