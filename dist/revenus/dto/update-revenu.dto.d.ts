import { CreateRevenuDto } from './create-revenu.dto';
declare const UpdateRevenuDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRevenuDto>>;
export declare class UpdateRevenuDto extends UpdateRevenuDto_base {
    annee: number;
    mois: string;
    categorie: string;
    sous_categorie: string;
    montant: number;
}
export {};
