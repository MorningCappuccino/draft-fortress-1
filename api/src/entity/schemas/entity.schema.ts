import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntityDocument = Entity & Document;

@Schema()
export class Entity {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
