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
exports.EntityController = void 0;
const common_1 = require("@nestjs/common");
const create_entity_dto_1 = require("./dto/create.entity.dto");
const update_entity_dto_1 = require("./dto/update.entity.dto");
const entity_service_1 = require("./entity.service");
let EntityController = class EntityController {
    constructor(entityService) {
        this.entityService = entityService;
    }
    getAll() {
        return this.entityService.getAll();
    }
    getOne(id) {
        return this.entityService.getById(id);
    }
    create(createEntityDto) {
        return this.entityService.create(createEntityDto);
    }
    remove(id) {
        return this.entityService.remove(id);
    }
    update(updateEntityDto, id) {
        return this.entityService.update(id, updateEntityDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entity_dto_1.CreateEntityDto]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_entity_dto_1.UpdateEntityDto, String]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "update", null);
EntityController = __decorate([
    (0, common_1.Controller)('entity'),
    __metadata("design:paramtypes", [entity_service_1.EntityService])
], EntityController);
exports.EntityController = EntityController;
//# sourceMappingURL=entity.controller.js.map