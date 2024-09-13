// src/wards/dto/create-wards.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWardDto {
  @ApiProperty({
    description: 'Name of the ward',
    example: 'AUYAKAYI',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Population of the ward',
    example: null,
    required: false,
  })
  @IsOptional()
  @IsInt()
  population?: number;

  @ApiProperty({
    description: 'Number of health cases in the ward',
    example: null,
    required: false,
  })
  @IsOptional()
  @IsInt()
  healthCases?: number;

  @ApiProperty({
    description: 'ID of the local government to which the ward belongs',
    example: '3716',
  })
  @IsString()
  @IsNotEmpty()
  localGovernment: string;
}
