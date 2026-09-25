"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepensesReellesModule = void 0;
const common_1 = require("@nestjs/common");
const depenses_reelles_service_1 = require("./depenses-reelles.service");
const depenses_reelles_controller_1 = require("./depenses-reelles.controller");
let DepensesReellesModule = class DepensesReellesModule {
};
exports.DepensesReellesModule = DepensesReellesModule;
exports.DepensesReellesModule = DepensesReellesModule = __decorate([
    (0, common_1.Module)({
        controllers: [depenses_reelles_controller_1.DepensesReellesController],
        providers: [depenses_reelles_service_1.DepensesReellesService],
    })
], DepensesReellesModule);
//# sourceMappingURL=depenses-reelles.module.js.map