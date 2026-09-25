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
exports.RevenusController = void 0;
const common_1 = require("@nestjs/common");
const revenus_service_1 = require("./revenus.service");
const create_revenu_dto_1 = require("./dto/create-revenu.dto");
const update_revenu_dto_1 = require("./dto/update-revenu.dto");
let RevenusController = class RevenusController {
    constructor(revenusService) {
        this.revenusService = revenusService;
    }
    create(createRevenuDto) {
        return this.revenusService.create(createRevenuDto);
    }
    findAll() {
        return this.revenusService.findAll();
    }
    findOne(id) {
        return this.revenusService.findOne(+id);
    }
    update(id, updateRevenuDto) {
        return this.revenusService.update(+id, updateRevenuDto);
    }
    remove(id) {
        return this.revenusService.remove(+id);
    }
};
exports.RevenusController = RevenusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_revenu_dto_1.CreateRevenuDto]),
    __metadata("design:returntype", void 0)
], RevenusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RevenusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevenusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_revenu_dto_1.UpdateRevenuDto]),
    __metadata("design:returntype", void 0)
], RevenusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevenusController.prototype, "remove", null);
exports.RevenusController = RevenusController = __decorate([
    (0, common_1.Controller)('revenus'),
    __metadata("design:paramtypes", [revenus_service_1.RevenusService])
], RevenusController);
//# sourceMappingURL=revenus.controller.js.map