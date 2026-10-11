import { DepensesPrevuesService } from './depenses-prevues.service';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
import { DepensesPrevue } from './entities/depenses-prevue.entity';
export declare class DepensesPrevuesController {
    private readonly depensesPrevuesService;
    constructor(depensesPrevuesService: DepensesPrevuesService);
    create(createDepensesPrevueDto: CreateDepensesPrevueDto): Promise<DepensesPrevue>;
    findAll(): Promise<DepensesPrevue[]>;
    findOne(id: number): Promise<DepensesPrevue>;
    findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesPrevue>;
    findAllDepensesPrevuesByAnneeMois(annee: number, mois: string): Promise<DepensesPrevue[]>;
    update(id: number, updateDepensesPrevueDto: UpdateDepensesPrevueDto): Promise<DepensesPrevue>;
    remove(id: number): Promise<DepensesPrevue>;
}
