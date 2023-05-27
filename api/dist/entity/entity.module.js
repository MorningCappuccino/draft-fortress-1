"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const entity_service_1 = require("./entity.service");
const mongoose_1 = require("@nestjs/mongoose");
const entity_controller_1 = require("./entity.controller");
const entity_schema_1 = require("./schemas/entity.schema");
let EntityModule = class EntityModule {
};
EntityModule = __decorate([
    (0, common_1.Module)({
        providers: [entity_service_1.EntityService],
        controllers: [entity_controller_1.EntityController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: entity_schema_1.Entity.name, schema: entity_schema_1.EntitySchema }]),
        ],
    })
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map