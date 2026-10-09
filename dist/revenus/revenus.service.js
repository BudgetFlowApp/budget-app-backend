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
exports.RevenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const revenu_entity_1 = require("./entities/revenu.entity");
let RevenusService = class RevenusService {
    constructor(revenuRepository) {
        this.revenuRepository = revenuRepository;
    }
    async create(createRevenuDto) {
        const lastRevenu = await this.revenuRepository.findOneBy({
            annee: createRevenuDto.annee,
            mois: createRevenuDto.mois,
            sous_categorie: createRevenuDto.sous_categorie,
        });
        if (lastRevenu) {
            throw new common_1.NotFoundException(`Revenu with mois ${createRevenuDto.mois} and sous_categorie ${createRevenuDto.sous_categorie} already exists`);
        }
        const newRevenu = this.revenuRepository.create(createRevenuDto);
        return this.revenuRepository.save(newRevenu);
    }
    async findAll() {
        return this.revenuRepository.find();
    }
    async findOne(id) {
        const revenu = await this.revenuRepository.findOneBy({
            idRevenu: id,
        });
        if (!revenu) {
            throw new common_1.NotFoundException(`Revenu with id ${id} not found`);
        }
        return revenu;
    }
    async update(id, updateRevenuDto) {
        const revenu = await this.revenuRepository.findOneBy({
            idRevenu: id,
        });
        if (!revenu) {
            throw new common_1.NotFoundException(`Revenu with id ${id} not found`);
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
    async remove(id) {
        const revenu = await this.revenuRepository.findOneBy({
            idRevenu: id,
        });
        if (!revenu) {
            throw new common_1.NotFoundException(`Revenu with id ${id} not found`);
        }
        await this.revenuRepository.delete({ idRevenu: id });
        return revenu;
    }
};
exports.RevenusService = RevenusService;
exports.RevenusService = RevenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(revenu_entity_1.Revenu)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RevenusService);
//# sourceMappingURL=revenus.service.js.map