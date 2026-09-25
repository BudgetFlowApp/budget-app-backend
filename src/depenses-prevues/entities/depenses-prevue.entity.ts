import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DepensesPrevue {
    @PrimaryGeneratedColumn()
    idDepensePrevue: number;

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

    @Column()
    montant: string; 
}
