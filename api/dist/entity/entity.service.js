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
exports.EntityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const entity_schema_1 = require("./schemas/entity.schema");
let EntityService = class EntityService {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async getAll() {
        return this.entityModel.find().exec();
    }
    async getById(id) {
        return this.entityModel.findById(id);
    }
    async create(entityDto) {
        const newProduct = new this.entityModel(entityDto);
        return newProduct.save();
    }
    async remove(id) {
        return this.entityModel.findByIdAndRemove(id);
    }
    async update(id, entityDto) {
        return this.entityModel.findByIdAndUpdate(id, entityDto, { new: true });
    }
};
EntityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(entity_schema_1.Entity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EntityService);
exports.EntityService = EntityService;
//# sourceMappingURL=entity.service.js.map