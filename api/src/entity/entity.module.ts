import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityController } from './entity.controller';
import { Entity, EntitySchema } from './schemas/entity.schema';

@Module({
  providers: [EntityService],
  controllers: [EntityController],
  imports: [
    MongooseModule.forFeature([{ name: Entity.name, schema: EntitySchema }]),
  ],
})
export class EntityModule {}
