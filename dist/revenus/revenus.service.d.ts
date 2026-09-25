import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
export declare class RevenusService {
    create(createRevenuDto: CreateRevenuDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRevenuDto: UpdateRevenuDto): string;
    remove(id: number): string;
}
