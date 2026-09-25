import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Revenu {
    @PrimaryGeneratedColumn()
    idRevenu: number;

    @Column()
    mois: string; 

    @Column()
    categorie: string;  
    
    @Column()
    sous_categorie: string; 

    @Column()
    montant: string; 
}
