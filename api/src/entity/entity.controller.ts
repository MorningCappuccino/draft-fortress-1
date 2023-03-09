import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEntityDto } from './dto/create.entity.dto';
import { UpdateEntityDto } from './dto/update.entity.dto';
import { EntityService } from './entity.service';
import { Entity } from './schemas/entity.schema';

@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Get()
  getAll(): Promise<Entity[]> {
    return this.entityService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Entity> {
    return this.entityService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createEntityDto: CreateEntityDto): Promise<Entity> {
    return this.entityService.create(createEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Entity> {
    return this.entityService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateEntityDto: UpdateEntityDto,
    @Param('id') id: string,
  ): Promise<Entity> {
    return this.entityService.update(id, updateEntityDto);
  }
}
