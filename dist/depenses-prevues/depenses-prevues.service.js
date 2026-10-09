"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepensesPrevuesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const depenses_prevue_entity_1 = require("./entities/depenses-prevue.entity");
const typeorm_2 = require("typeorm");
let DepensesPrevuesService = class DepensesPrevuesService {
    constructor(depensesPrevuesRepository) {
        this.depensesPrevuesRepository = depensesPrevuesRepository;
    }
    async create(createDepensesPrevueDto) {
        const lastDepensePrevue = await this.depensesPrevuesRepository.findOneBy({
            annee: createDepensesPrevueDto.annee,
            mois: createDepensesPrevueDto.mois,
            categorie: createDepensesPrevueDto.categorie,
        });
        if (lastDepensePrevue) {
            throw new common_1.NotFoundException(`DepensePrevue with mois ${createDepensesPrevueDto.mois} and categorie ${createDepensesPrevueDto.categorie} already exists`);
        }
        const newDepensePrevue = this.depensesPrevuesRepository.create(createDepensesPrevueDto);
        return this.depensesPrevuesRepository.save(newDepensePrevue);
    }
    findAll() {
        return this.depensesPrevuesRepository.find();
    }
    findOne(id) {
        const lastDepensePrevue = this.depensesPrevuesRepository.findOneBy({
            idDepensePrevue: id
        });
        if (!lastDepensePrevue) {
            throw new common_1.NotFoundException(`DepensePrevue with id ${id} not found`);
        }
        return lastDepensePrevue;
    }
    findByAnneeMoisCategorie(annee, mois, categorie) {
        const lastDepensePrevue = this.depensesPrevuesRepository.findOneBy({
            annee: annee,
            mois: mois,
            categorie: categorie
        });
        if (!lastDepensePrevue) {
            throw new common_1.NotFoundException(`DepensePrevue with annee ${annee}, mois ${mois} and categorie ${categorie} not found`);
        }
        return lastDepensePrevue;
    }
    async update(id, updateDepensesPrevueDto) {
        const depensePrevue = await this.depensesPrevuesRepository.findOneBy({
            idDepensePrevue: id
        });
        if (!depensePrevue) {
            throw new common_1.NotFoundException(`DepensePrevue with id ${id} not found`);
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
    async remove(id) {
        const depensePrevue = await this.depensesPrevuesRepository.findOneBy({
            idDepensePrevue: id
        });
        if (!depensePrevue) {
            throw new common_1.NotFoundException(`DepensePrevue with id ${id} not found`);
        }
        await this.depensesPrevuesRepository.delete({ idDepensePrevue: id });
        return depensePrevue;
    }
};
exports.DepensesPrevuesService = DepensesPrevuesService;
exports.DepensesPrevuesService = DepensesPrevuesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(depenses_prevue_entity_1.DepensesPrevue)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepensesPrevuesService);
//# sourceMappingURL=depenses-prevues.service.js.map