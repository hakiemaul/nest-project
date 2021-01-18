import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CrudDto {
  @ApiProperty()
  @IsString()
  public message!: string;
}