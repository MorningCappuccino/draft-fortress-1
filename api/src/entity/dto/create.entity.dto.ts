import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityDto {
  @ApiProperty({
    description: 'Заголовок',
    type: String,
    example: 'Мой заголовок',
  })
  readonly title: string;

  @ApiProperty({
    description: 'Описание',
    type: String,
    example: 'Мое описание',
  })
  readonly description: string;
}
