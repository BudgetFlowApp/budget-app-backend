import { RevenusService } from './revenus.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import { Revenu } from './entities/revenu.entity';
export declare class RevenusController {
    private readonly revenusService;
    constructor(revenusService: RevenusService);
    create(createRevenuDto: CreateRevenuDto): Promise<Revenu>;
    findAll(): Promise<Revenu[]>;
    findOne(id: number): Promise<Revenu>;
    update(id: number, updateRevenuDto: UpdateRevenuDto): Promise<Revenu>;
    remove(id: number): Promise<Revenu>;
}
