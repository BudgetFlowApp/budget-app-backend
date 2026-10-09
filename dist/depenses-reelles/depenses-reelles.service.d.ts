import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
import { DepensesReelle } from './entities/depenses-reelle.entity';
import { Repository } from 'typeorm';
export declare class DepensesReellesService {
    private readonly depensesReellesRepository;
    constructor(depensesReellesRepository: Repository<DepensesReelle>);
    create(createDepensesReelleDto: CreateDepensesReelleDto): Promise<DepensesReelle>;
    findAll(): Promise<DepensesReelle[]>;
    findOne(id: number): Promise<DepensesReelle>;
    findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesReelle>;
    update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto): Promise<DepensesReelle>;
    remove(id: number): Promise<DepensesReelle>;
}
