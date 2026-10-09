import { CreateDepensesPrevueDto } from './create-depenses-prevue.dto';
declare const UpdateDepensesPrevueDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDepensesPrevueDto>>;
export declare class UpdateDepensesPrevueDto extends UpdateDepensesPrevueDto_base {
    annee: number;
    mois: string;
    categorie: string;
    type: string;
    sous_categorie: string;
    description: string;
    montant: number;
}
export {};
