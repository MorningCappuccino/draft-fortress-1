import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateEntityDto } from './dto/create.entity.dto';
import { UpdateEntityDto } from './dto/update.entity.dto';
import { EntityService } from './entity.service';
import { Entity } from './schemas/entity.schema';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EntityGuard } from './entity.guard';

const { OK, CREATED } = HttpStatus;

@ApiTags('entity')
@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @ApiResponse({
    status: OK,
    description: 'Get all data',
    type: CreateEntityDto,
    isArray: true,
  })
  @Get()
  async getAll(): Promise<Entity[]> {
    return this.entityService.getAll();
  }

  @ApiResponse({
    status: OK,
    description: 'Get object with help id',
    type: CreateEntityDto,
    isArray: false,
  })
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Entity> {
    return this.entityService.getById(id);
  }

  @Post()
  @ApiResponse({
    status: CREATED,
    description: 'Return created object',
    type: CreateEntityDto,
    isArray: false,
  })
  @UseGuards(new EntityGuard())
  create(@Body() createEntityDto: CreateEntityDto): Promise<Entity> {
    return this.entityService.create(createEntityDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: OK,
    description: 'Object removed',
    type: UpdateEntityDto,
    isArray: false,
  })
  remove(@Param('id') id: string): Promise<Entity> {
    return this.entityService.remove(id);
  }

  @Put(':id')
  @ApiResponse({
    status: OK,
    description:
      'Updated Copy Object Created (создает новый объект на основе старого)',
    type: UpdateEntityDto,
    isArray: false,
  })
  @UseGuards(new EntityGuard())
  update(
    @Body() updateEntityDto: UpdateEntityDto,
    @Param('id') id: string,
  ): Promise<Entity> {
    return this.entityService.update(id, updateEntityDto);
  }
}
