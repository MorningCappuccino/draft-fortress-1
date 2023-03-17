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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @HttpCode(OK)
  getAll(): Promise<Entity[]> {
    return this.entityService.getAll();
  }

  @ApiResponse({
    status: OK,
    description: 'Get object with help id',
    type: CreateEntityDto,
    isArray: false,
  })
  @Get(':id')
  @HttpCode(OK)
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
  @HttpCode(CREATED)
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
  @HttpCode(OK)
  remove(@Param('id') id: string): Promise<Entity> {
    return this.entityService.remove(id);
  }

  @Put(':id')
  @ApiResponse({
    status: OK,
    description: 'Updated Copy Object Created',
    type: UpdateEntityDto,
    isArray: false,
  })
  @HttpCode(OK)
  update(
    @Body() updateEntityDto: UpdateEntityDto,
    @Param('id') id: string,
  ): Promise<Entity> {
    return this.entityService.update(id, updateEntityDto);
  }
}
