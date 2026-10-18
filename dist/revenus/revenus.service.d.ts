import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import { Repository } from 'typeorm';
import { Revenu } from './entities/revenu.entity';
export declare class RevenusService {
    private readonly revenuRepository;
    constructor(revenuRepository: Repository<Revenu>);
    create(createRevenuDto: CreateRevenuDto): Promise<Revenu>;
    findAll(): Promise<Revenu[]>;
    findOne(id: number): Promise<Revenu>;
    sumAllRevenus(annee: number, mois: string): Promise<number>;
    findAllCategories(annee: number, mois: string): Promise<string[]>;
    update(id: number, updateRevenuDto: UpdateRevenuDto): Promise<Revenu>;
    remove(id: number): Promise<Revenu>;
}
