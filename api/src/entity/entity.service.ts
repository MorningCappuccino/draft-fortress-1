import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntityDto } from './dto/create.entity.dto';
import { Entity, EntityDocument } from './schemas/entity.schema';
import { UpdateEntityDto } from './dto/update.entity.dto';

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(Entity.name) private entityModel: Model<EntityDocument>,
  ) {}

  async getAll(): Promise<Entity[]> {
    return this.entityModel.find().exec();
  }

  async getById(id: string): Promise<Entity> {
    return this.entityModel.findById(id);
  }

  async create(entityDto: CreateEntityDto): Promise<Entity> {
    const newProduct = new this.entityModel(entityDto);
    return newProduct.save();
  }

  async remove(id: string): Promise<Entity> {
    return this.entityModel.findByIdAndRemove(id);
  }

  async update(id: string, entityDto: UpdateEntityDto): Promise<Entity> {
    return this.entityModel.findByIdAndUpdate(id, entityDto, { new: true });
  }
}
