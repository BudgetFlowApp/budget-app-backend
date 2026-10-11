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
exports.DepensesPrevuesController = void 0;
const common_1 = require("@nestjs/common");
const depenses_prevues_service_1 = require("./depenses-prevues.service");
const create_depenses_prevue_dto_1 = require("./dto/create-depenses-prevue.dto");
const update_depenses_prevue_dto_1 = require("./dto/update-depenses-prevue.dto");
let DepensesPrevuesController = class DepensesPrevuesController {
    constructor(depensesPrevuesService) {
        this.depensesPrevuesService = depensesPrevuesService;
    }
    create(createDepensesPrevueDto) {
        return this.depensesPrevuesService.create(createDepensesPrevueDto);
    }
    findAll() {
        return this.depensesPrevuesService.findAll();
    }
    findOne(id) {
        return this.depensesPrevuesService.findOne(id);
    }
    findByAnneeMoisCategorie(annee, mois, categorie) {
        return this.depensesPrevuesService.findByAnneeMoisCategorie(annee, mois, categorie);
    }
    findAllDepensesPrevuesByAnneeMois(annee, mois) {
        return this.depensesPrevuesService.findAllDepensesPrevuesByAnneeMois(annee, mois);
    }
    update(id, updateDepensesPrevueDto) {
        return this.depensesPrevuesService.update(id, updateDepensesPrevueDto);
    }
    remove(id) {
        return this.depensesPrevuesService.remove(id);
    }
};
exports.DepensesPrevuesController = DepensesPrevuesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_depenses_prevue_dto_1.CreateDepensesPrevueDto]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('categorie/:annee/:mois/:categorie'),
    __param(0, (0, common_1.Param)('annee')),
    __param(1, (0, common_1.Param)('mois')),
    __param(2, (0, common_1.Param)('categorie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "findByAnneeMoisCategorie", null);
__decorate([
    (0, common_1.Get)('annee-mois/:annee/:mois'),
    __param(0, (0, common_1.Param)('annee')),
    __param(1, (0, common_1.Param)('mois')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "findAllDepensesPrevuesByAnneeMois", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_depenses_prevue_dto_1.UpdateDepensesPrevueDto]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepensesPrevuesController.prototype, "remove", null);
exports.DepensesPrevuesController = DepensesPrevuesController = __decorate([
    (0, common_1.Controller)('depenses-prevues'),
    __metadata("design:paramtypes", [depenses_prevues_service_1.DepensesPrevuesService])
], DepensesPrevuesController);
//# sourceMappingURL=depenses-prevues.controller.js.map