import { Model } from 'mongoose';
import { CreateEntityDto } from './dto/create.entity.dto';
import { Entity, EntityDocument } from './schemas/entity.schema';
import { UpdateEntityDto } from './dto/update.entity.dto';
export declare class EntityService {
    private entityModel;
    constructor(entityModel: Model<EntityDocument>);
    getAll(): Promise<Entity[]>;
    getById(id: string): Promise<Entity>;
    create(entityDto: CreateEntityDto): Promise<Entity>;
    remove(id: string): Promise<Entity>;
    update(id: string, entityDto: UpdateEntityDto): Promise<Entity>;
}
