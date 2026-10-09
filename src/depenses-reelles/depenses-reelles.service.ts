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
      mois: createDepensesReelleDto.mois,
      sous_categorie: createDepensesReelleDto.sous_categorie,
    });
    if (lastDepenseReelle) {
      throw new NotFoundException(
        `DepensePrevue with mois ${createDepensesReelleDto.mois} and sous_categorie ${createDepensesReelleDto.sous_categorie} already exists`,
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

  async update(id: number, updateDepensesReelleDto: UpdateDepensesReelleDto): Promise<DepensesReelle> {
    const depenseReelle = await this.depensesReellesRepository.findOneBy({
      idDepenseReelle: id
    });
    if (!depenseReelle) {
      throw new NotFoundException(
        `DepensePrevue with id ${id} not found`,
      );    
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
