import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepensesReelleDto } from './dto/create-depenses-reelle.dto';
import { UpdateDepensesReelleDto } from './dto/update-depenses-reelle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepensesReelle } from './entities/depenses-reelle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepensesReellesService {
  constructor(
    @InjectRepository(DepensesReelle) private readonly depensesReellesRepository: Repository<DepensesReelle>,
  ) {}  
  async create(createDepensesReelleDto: CreateDepensesReelleDto): Promise<DepensesReelle> {
    const lastDepenseReelle = await this.depensesReellesRepository.findOneBy({
      annee: createDepensesReelleDto.annee,
      mois: createDepensesReelleDto.mois,
      categorie: createDepensesReelleDto.categorie,
    });
    if (lastDepenseReelle) {
      throw new NotFoundException(
        `DepensePrevue with mois ${createDepensesReelleDto.mois} and categorie ${createDepensesReelleDto.categorie} already exists`,
      );    
    } 
    const newDepenseReelle = this.depensesReellesRepository.create(createDepensesReelleDto);
    return this.depensesReellesRepository.save(newDepenseReelle);
  }

  async findAll(): Promise<DepensesReelle[]> {
    return this.depensesReellesRepository.find();
  }

  findOne(id: number): Promise<DepensesReelle> {
    return this.depensesReellesRepository.findOneBy({
      idDepenseReelle: id
    });
  }

  findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesReelle> {
    const lastDepenseReelle = this.depensesReellesRepository.findOneBy({
      annee: annee,
      mois: mois,
      categorie: categorie
    });
    if (!lastDepenseReelle) {
      throw new NotFoundException(`DepenseReelle with categorie ${categorie} not found`);
    }
    return lastDepenseReelle;
  }  

  async findAllDepensesReellesByAnnee(annee: number): Promise<DepensesReelle[]> {
    const AllDepensesReelles = this.depensesReellesRepository.findBy({
      annee: annee
    })
    if (!AllDepensesReelles) {
      throw new NotFoundException(`DepenseReelles with annee ${annee} not found`);
    }
    return AllDepensesReelles;
  }

  async update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto): Promise<DepensesReelle> {
    const depenseReelle = await this.depensesReellesRepository.findOneBy({
      idDepenseReelle: id
    });
    if (!depenseReelle) {
      throw new NotFoundException(
        `DepensePrevue with id ${id} not found`,
      );    
    }
    if (updateDepensesReelleDto.annee !== undefined && updateDepensesReelleDto.annee !== null) {
      depenseReelle.annee = updateDepensesReelleDto.annee;
    }
    if (updateDepensesReelleDto.mois !== undefined && updateDepensesReelleDto.mois !== '') {
      depenseReelle.mois = updateDepensesReelleDto.mois;
    }    
    if (updateDepensesReelleDto.type !== undefined && updateDepensesReelleDto.type !== '') {
      depenseReelle.type = updateDepensesReelleDto.type;
    }  
    if (updateDepensesReelleDto.categorie !== undefined && updateDepensesReelleDto.categorie !== '') {
      depenseReelle.categorie = updateDepensesReelleDto.categorie;
    }     
        if (updateDepensesReelleDto.sous_categorie !== undefined && updateDepensesReelleDto.sous_categorie !== '') {
      depenseReelle.sous_categorie = updateDepensesReelleDto.sous_categorie;
    }    
    if (updateDepensesReelleDto.description !== undefined && updateDepensesReelleDto.description !== '') {
      depenseReelle.description = updateDepensesReelleDto.description;
    }  
    if (typeof updateDepensesReelleDto.montant === 'number') {
      depenseReelle.montant = updateDepensesReelleDto.montant;
    }   
    return this.depensesReellesRepository.save(depenseReelle);         
  }

  async remove(id: number): Promise<DepensesReelle> {
    const depenseReelle = await this.depensesReellesRepository.findOneBy({
      idDepenseReelle: id
    });
    if (!depenseReelle) {
      throw new NotFoundException(`DepenseReelle with id ${id} not found`);
    }
    await this.depensesReellesRepository.delete({ idDepenseReelle: id });
    
    return depenseReelle;    
  }
}
