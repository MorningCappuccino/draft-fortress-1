import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntityDto } from './dto/create.entity.dto';
import { Entity, EntityDocument } from './schemas/entity.schema';
import { UpdateEntityDto } from './dto/update.entity.dto';

const { NOT_FOUND, FORBIDDEN } = HttpStatus;

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(Entity.name) private entityModel: Model<EntityDocument>,
  ) {}

  async getAll(): Promise<Entity[]> {
    try {
      return await this.entityModel.find();
    } catch (err) {
      throw new HttpException('Not Found', NOT_FOUND);
    }
  }

  async getById(id: string): Promise<Entity> {
    try {
      return await this.entityModel.findById(id);
    } catch (e) {
      throw new HttpException('Not Found', NOT_FOUND);
    }
  }

  async create(entityDto: CreateEntityDto): Promise<Entity> {
    try {
      const newProduct = new this.entityModel(entityDto);
      return await newProduct.save();
    } catch (err) {
      throw new HttpException('Forbidden', FORBIDDEN);
    }
  }

  async remove(id: string): Promise<Entity> {
    try {
      return await this.entityModel.findByIdAndRemove(id);
    } catch (err) {
      throw new HttpException('Not Found', NOT_FOUND);
    }
  }

  async update(id: string, entityDto: UpdateEntityDto): Promise<Entity> {
    try {
      return await this.entityModel.findByIdAndUpdate(id, entityDto, {
        new: true,
      });
    } catch (err) {
      throw new HttpException('Forbidden', FORBIDDEN);
    }
  }
}
