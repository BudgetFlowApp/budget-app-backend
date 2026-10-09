import { CreateDepensesReelleDto } from './create-depenses-reelle.dto';
declare const UpdateDepensesReelleDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDepensesReelleDto>>;
export declare class UpdateDepensesReelleDto extends UpdateDepensesReelleDto_base {
    annee: number;
    mois: string;
    categorie: string;
    type: string;
    sous_categorie: string;
    description: string;
    montant: number;
}
export {};
