import { RevenusService } from './revenus.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
export declare class RevenusController {
    private readonly revenusService;
    constructor(revenusService: RevenusService);
    create(createRevenuDto: CreateRevenuDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRevenuDto: UpdateRevenuDto): string;
    remove(id: string): string;
}
