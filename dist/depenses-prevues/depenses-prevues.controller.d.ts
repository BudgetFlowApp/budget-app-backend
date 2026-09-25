import { DepensesPrevuesService } from './depenses-prevues.service';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
export declare class DepensesPrevuesController {
    private readonly depensesPrevuesService;
    constructor(depensesPrevuesService: DepensesPrevuesService);
    create(createDepensesPrevueDto: CreateDepensesPrevueDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDepensesPrevueDto: UpdateDepensesPrevueDto): string;
    remove(id: string): string;
}
