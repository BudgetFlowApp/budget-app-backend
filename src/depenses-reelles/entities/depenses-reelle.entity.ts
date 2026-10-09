import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DepensesReelle {
    @PrimaryGeneratedColumn()
    idDepenseReelle: number;

    @Column()
    annee: number; 
        
    @Column()
    mois: string; 

    @Column()
    type: string;  

    @Column()
    categorie: string;     
    
    @Column()
    sous_categorie: string; 

    @Column()
    description: string;     

    @Column('float')
    montant: number; 
}
