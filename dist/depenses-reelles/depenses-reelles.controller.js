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
exports.DepensesReellesController = void 0;
const common_1 = require("@nestjs/common");
const depenses_reelles_service_1 = require("./depenses-reelles.service");
const create_depenses_reelle_dto_1 = require("./dto/create-depenses-reelle.dto");
const update_depenses_reelle_dto_1 = require("./dto/update-depenses-reelle.dto");
let DepensesReellesController = class DepensesReellesController {
    constructor(depensesReellesService) {
        this.depensesReellesService = depensesReellesService;
    }
    create(createDepensesReelleDto) {
        return this.depensesReellesService.create(createDepensesReelleDto);
    }
    findAll() {
        return this.depensesReellesService.findAll();
    }
    findOne(id) {
        return this.depensesReellesService.findOne(+id);
    }
    update(id, updateDepensesReelleDto) {
        return this.depensesReellesService.update(+id, updateDepensesReelleDto);
    }
    remove(id) {
        return this.depensesReellesService.remove(+id);
    }
};
exports.DepensesReellesController = DepensesReellesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_depenses_reelle_dto_1.CreateDepensesReelleDto]),
    __metadata("design:returntype", void 0)
], DepensesReellesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepensesReellesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepensesReellesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_depenses_reelle_dto_1.UpdateDepensesReelleDto]),
    __metadata("design:returntype", void 0)
], DepensesReellesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepensesReellesController.prototype, "remove", null);
exports.DepensesReellesController = DepensesReellesController = __decorate([
    (0, common_1.Controller)('depenses-reelles'),
    __metadata("design:paramtypes", [depenses_reelles_service_1.DepensesReellesService])
], DepensesReellesController);
//# sourceMappingURL=depenses-reelles.controller.js.map