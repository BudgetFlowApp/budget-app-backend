"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRevenuDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_revenu_dto_1 = require("./create-revenu.dto");
class UpdateRevenuDto extends (0, mapped_types_1.PartialType)(create_revenu_dto_1.CreateRevenuDto) {
}
exports.UpdateRevenuDto = UpdateRevenuDto;
//# sourceMappingURL=update-revenu.dto.js.map