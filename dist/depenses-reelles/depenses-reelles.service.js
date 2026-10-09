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
exports.DepensesReellesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const depenses_reelle_entity_1 = require("./entities/depenses-reelle.entity");
const typeorm_2 = require("typeorm");
let DepensesReellesService = class DepensesReellesService {
    constructor(depensesReellesRepository) {
        this.depensesReellesRepository = depensesReellesRepository;
    }
    async create(createDepensesReelleDto) {
        const lastDepenseReelle = await this.depensesReellesRepository.findOneBy({
            mois: createDepensesReelleDto.mois,
            sous_categorie: createDepensesReelleDto.sous_categorie,
        });
        if (lastDepenseReelle) {
            throw new common_1.NotFoundException(`DepensePrevue with mois ${createDepensesReelleDto.mois} and sous_categorie ${createDepensesReelleDto.sous_categorie} already exists`);
        }
        const newDepenseReelle = this.depensesReellesRepository.create(createDepensesReelleDto);
        return this.depensesReellesRepository.save(newDepenseReelle);
    }
    async findAll() {
        return this.depensesReellesRepository.find();
    }
    findOne(id) {
        return this.depensesReellesRepository.findOneBy({
            idDepenseReelle: id
        });
    }
    async update(id, updateDepensesReelleDto) {
        const depenseReelle = await this.depensesReellesRepository.findOneBy({
            idDepenseReelle: id
        });
        if (!depenseReelle) {
            throw new common_1.NotFoundException(`DepensePrevue with id ${id} not found`);
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
    async remove(id) {
        const depenseReelle = await this.depensesReellesRepository.findOneBy({
            idDepenseReelle: id
        });
        if (!depenseReelle) {
            throw new common_1.NotFoundException(`DepenseReelle with id ${id} not found`);
        }
        await this.depensesReellesRepository.delete({ idDepenseReelle: id });
        return depenseReelle;
    }
};
exports.DepensesReellesService = DepensesReellesService;
exports.DepensesReellesService = DepensesReellesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(depenses_reelle_entity_1.DepensesReelle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepensesReellesService);
//# sourceMappingURL=depenses-reelles.service.js.map