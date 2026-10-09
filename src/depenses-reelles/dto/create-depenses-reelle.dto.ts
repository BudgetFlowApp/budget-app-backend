import { Type } from "class-transformer";
import { IsIn, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateDepensesReelleDto {
    @Type(() => Number)
    @IsNumber()
    annee: number; 
        
    @IsString()
    @MaxLength(25)
    mois: string; 
    
    @IsString()
    @MaxLength(50)
    categorie: string;  

    @IsString()
    @MaxLength(50)
    @IsIn(['dépense', 'gain'])
    type: string;     
    
    @IsString()
    @MaxLength(50)
    sous_categorie: string; 

    @IsString()
    @MaxLength(100)
    description: string;     

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    montant: number;        
}
