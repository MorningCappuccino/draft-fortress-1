import { CreateEntityDto } from './dto/create.entity.dto';
import { UpdateEntityDto } from './dto/update.entity.dto';
import { EntityService } from './entity.service';
import { Entity } from './schemas/entity.schema';
export declare class EntityController {
    private readonly entityService;
    constructor(entityService: EntityService);
    getAll(): Promise<Entity[]>;
    getOne(id: string): Promise<Entity>;
    create(createEntityDto: CreateEntityDto): Promise<Entity>;
    remove(id: string): Promise<Entity>;
    update(updateEntityDto: UpdateEntityDto, id: string): Promise<Entity>;
}
