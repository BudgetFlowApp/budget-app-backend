import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
export declare class DepensesReellesService {
    create(createDepensesReelleDto: CreateDepensesReelleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto): string;
    remove(id: number): string;
}
