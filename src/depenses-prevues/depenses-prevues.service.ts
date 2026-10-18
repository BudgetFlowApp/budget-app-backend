import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepensesPrevueDto } from './dto/create-depenses-prevue.dto';
import { UpdateDepensesPrevueDto } from './dto/update-depenses-prevue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepensesPrevue } from './entities/depenses-prevue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepensesPrevuesService {
  constructor(
    @InjectRepository(DepensesPrevue) private readonly depensesPrevuesRepository: Repository<DepensesPrevue>,
  ) {}

  async create(createDepensesPrevueDto: CreateDepensesPrevueDto): Promise<DepensesPrevue> {
    const lastDepensePrevue = await this.depensesPrevuesRepository.findOneBy({
      annee: createDepensesPrevueDto.annee,
      mois: createDepensesPrevueDto.mois,
      categorie: createDepensesPrevueDto.categorie,
    });
    if (lastDepensePrevue) {
      throw new NotFoundException(
        `DepensePrevue with mois ${createDepensesPrevueDto.mois} and categorie ${createDepensesPrevueDto.categorie} already exists`,
      );    
    }
    const newDepensePrevue = this.depensesPrevuesRepository.create(createDepensesPrevueDto);
    return this.depensesPrevuesRepository.save(newDepensePrevue);
  }

  findAll(): Promise<DepensesPrevue[]> {
    return this.depensesPrevuesRepository.find();
  }

  findOne(id: number): Promise<DepensesPrevue> {
    const lastDepensePrevue = this.depensesPrevuesRepository.findOneBy({
      idDepensePrevue: id
    });
    if (!lastDepensePrevue) {
      throw new NotFoundException(`DepensePrevue with id ${id} not found`);
    }
    return lastDepensePrevue;
  }

  findByAnneeMoisCategorie(annee: number, mois: string, categorie: string): Promise<DepensesPrevue> {
    const lastDepensePrevue = this.depensesPrevuesRepository.findOneBy({
      annee: annee,
      mois: mois,
      categorie: categorie
    });
    if (!lastDepensePrevue) {
      throw new NotFoundException(`DepensePrevue with annee ${annee}, mois ${mois} and categorie ${categorie} not found`);
    }
    return lastDepensePrevue;
  }

  async findAllDepensesPrevuesByAnneeMois(annee: number, mois: string): Promise<DepensesPrevue[]> {
    const allDepensesPrevues = this.depensesPrevuesRepository.findBy({
      annee: annee,
      mois: mois
    })
    if (!allDepensesPrevues) {
      throw new NotFoundException(`DepensePrevues with annee ${annee} and ${mois} not found`);
    }
    return allDepensesPrevues;
  }

  async findAllCategories(annee: number, mois: string): Promise<string[]> {
    const AllDepensesPrevues = await this.depensesPrevuesRepository.findBy({
      annee: annee,
      mois: mois
    })    
    if (!AllDepensesPrevues) {
      throw new NotFoundException(`DepensePrevues with annee ${annee} and mois ${mois} not found`);
    }
    const categories = [
      ...new Set(AllDepensesPrevues.map(depense => depense.categorie))
    ];
    return categories;
  }  

  async update(id: number, updateDepensesPrevueDto: UpdateDepensesPrevueDto): Promise<DepensesPrevue> {
    const depensePrevue = await this.depensesPrevuesRepository.findOneBy({
      idDepensePrevue: id
    });
    if (!depensePrevue) {
      throw new NotFoundException(`DepensePrevue with id ${id} not found`);
    }
    if (updateDepensesPrevueDto.annee !== undefined && updateDepensesPrevueDto.annee !== null) {
      depensePrevue.annee = updateDepensesPrevueDto.annee;
    }
    if (updateDepensesPrevueDto.mois !== undefined && updateDepensesPrevueDto.mois !== '') {
      depensePrevue.mois = updateDepensesPrevueDto.mois;
    }    
    if (updateDepensesPrevueDto.type !== undefined && updateDepensesPrevueDto.type !== '') {
      depensePrevue.type = updateDepensesPrevueDto.type;
    }  
    if (updateDepensesPrevueDto.categorie !== undefined && updateDepensesPrevueDto.categorie !== '') {
      depensePrevue.categorie = updateDepensesPrevueDto.categorie;
    }     
        if (updateDepensesPrevueDto.sous_categorie !== undefined && updateDepensesPrevueDto.sous_categorie !== '') {
      depensePrevue.sous_categorie = updateDepensesPrevueDto.sous_categorie;
    }    
    if (updateDepensesPrevueDto.description !== undefined && updateDepensesPrevueDto.description !== '') {
      depensePrevue.description = updateDepensesPrevueDto.description;
    }  
    if (typeof updateDepensesPrevueDto.montant === 'number') {
      depensePrevue.montant = updateDepensesPrevueDto.montant;
    }   
    return this.depensesPrevuesRepository.save(depensePrevue);            
  }

  async remove(id: number): Promise<DepensesPrevue> {
    const depensePrevue = await this.depensesPrevuesRepository.findOneBy({
      idDepensePrevue: id
    });
    if (!depensePrevue) {
      throw new NotFoundException(`DepensePrevue with id ${id} not found`);
    }
    await this.depensesPrevuesRepository.delete({ idDepensePrevue: id });
    
    return depensePrevue;        
  }
}
