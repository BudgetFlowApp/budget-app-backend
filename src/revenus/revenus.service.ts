import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenu } from './entities/revenu.entity';

@Injectable()
export class RevenusService {
  constructor(
    @InjectRepository(Revenu) private readonly revenuRepository: Repository<Revenu>,
  ) {}

  async create(createRevenuDto: CreateRevenuDto): Promise<Revenu> {
    const lastRevenu = await this.revenuRepository.findOneBy({
      annee: createRevenuDto.annee,
      mois: createRevenuDto.mois,
      sous_categorie: createRevenuDto.sous_categorie,
    });
    if (lastRevenu) {
      throw new NotFoundException(
        `Revenu with mois ${createRevenuDto.mois} and sous_categorie ${createRevenuDto.sous_categorie} already exists`,
      );
    }

    const newRevenu = this.revenuRepository.create(createRevenuDto);
    return this.revenuRepository.save(newRevenu);
  }

  async findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find();
  }

  async findOne(id: number): Promise<Revenu> {
    const revenu = await this.revenuRepository.findOneBy({
      idRevenu: id,
    });
    if (!revenu) {
      throw new NotFoundException(`Revenu with id ${id} not found`);
    }
    return revenu;
  }

  async update(id: number, updateRevenuDto: UpdateRevenuDto): Promise<Revenu> {
    const revenu = await this.revenuRepository.findOneBy({
      idRevenu: id,
    });   
    if (!revenu){
      throw new NotFoundException(`Revenu with id ${id} not found`);
    }
    if (updateRevenuDto.annee !== undefined && updateRevenuDto.annee !== null) {
      revenu.annee = updateRevenuDto.annee;
    }
    if (updateRevenuDto.mois !== undefined && updateRevenuDto.mois !== '') {
      revenu.mois = updateRevenuDto.mois;
    }
    if (updateRevenuDto.categorie !== undefined && updateRevenuDto.categorie !== '') {
      revenu.categorie = updateRevenuDto.categorie;
    }
    if (updateRevenuDto.sous_categorie !== undefined && updateRevenuDto.sous_categorie !== '') {
      revenu.sous_categorie = updateRevenuDto.sous_categorie;
    }
    if (typeof updateRevenuDto.montant === 'number') {
      revenu.montant = updateRevenuDto.montant;
    }    
    return this.revenuRepository.save(revenu);
  }

  async remove(id: number): Promise<Revenu> {
    const revenu = await this.revenuRepository.findOneBy({
      idRevenu: id,
    }); 
    if (!revenu){
      throw new NotFoundException(`Revenu with id ${id} not found`);
    }
    await this.revenuRepository.delete({ idRevenu: id });

    return revenu;
  }
}
