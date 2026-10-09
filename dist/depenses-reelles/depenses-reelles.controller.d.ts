import { DepensesReellesService } from './depenses-reelles.service';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
import { DepensesReelle } from './entities/depenses-reelle.entity';
export declare class DepensesReellesController {
    private readonly depensesReellesService;
    constructor(depensesReellesService: DepensesReellesService);
    create(createDepensesReelleDto: CreateDepensesReelleDto): Promise<DepensesReelle>;
    findAll(): Promise<DepensesReelle[]>;
    findOne(id: number): Promise<DepensesReelle>;
    findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesReelle>;
    update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto): Promise<DepensesReelle>;
    remove(id: number): Promise<DepensesReelle>;
}
