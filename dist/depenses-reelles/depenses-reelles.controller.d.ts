import { DepensesReellesService } from './depenses-reelles.service';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
export declare class DepensesReellesController {
    private readonly depensesReellesService;
    constructor(depensesReellesService: DepensesReellesService);
    create(createDepensesReelleDto: CreateDepensesReelleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDepensesReelleDto: UpdateDepensesReelleDto): string;
    remove(id: string): string;
}
