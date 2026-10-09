import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
import { DepensesPrevue } from './entities/depenses-prevue.entity';
import { Repository } from 'typeorm';
export declare class DepensesPrevuesService {
    private readonly depensesPrevuesRepository;
    constructor(depensesPrevuesRepository: Repository<DepensesPrevue>);
    create(createDepensesPrevueDto: CreateDepensesPrevueDto): Promise<DepensesPrevue>;
    findAll(): Promise<DepensesPrevue[]>;
    findOne(id: number): Promise<DepensesPrevue>;
    findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesPrevue>;
    update(id: number, updateDepensesPrevueDto: UpdateDepensesPrevueDto): Promise<DepensesPrevue>;
    remove(id: number): Promise<DepensesPrevue>;
}
