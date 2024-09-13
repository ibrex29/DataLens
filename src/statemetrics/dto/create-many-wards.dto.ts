// src/wards/dto/create-many-wards.dto.ts

import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateWardDto } from './create-ward.dto';

export class CreateManyWardsDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  wards: CreateWardDto[];
}
