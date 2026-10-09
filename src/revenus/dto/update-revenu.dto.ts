import { PartialType } from '@nestjs/mapped-types';
import { CreateRevenuDto } from './create-revenu.dto';
import { Type } from 'class-transformer';
import { IsString, Min, MaxLength, IsNumber } from 'class-validator';

export class UpdateRevenuDto extends PartialType(CreateRevenuDto) {
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
    sous_categorie: string; 

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    montant: number; 
}
