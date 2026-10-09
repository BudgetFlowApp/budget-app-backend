import { PartialType } from '@nestjs/mapped-types';
import { CreateDepensesReelleDto } from './create-depenses-reelle.dto';
import { IsIn, IsNumber, IsString, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateDepensesReelleDto extends PartialType(CreateDepensesReelleDto) {
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
