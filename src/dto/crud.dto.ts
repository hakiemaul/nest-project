import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CrudDto {
  @ApiProperty({
    description: 'CRUD message content',
  })
  @MinLength(5)
  @IsString()
  public message!: string;

  @ApiPropertyOptional()
  public id?: string;
}