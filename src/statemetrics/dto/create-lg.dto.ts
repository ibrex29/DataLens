import { IsString, IsNotEmpty, IsInt, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocalGovernmentDto {
  @ApiProperty({
    description: 'The name of the local government',
    example: 'Auyo',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The name or ID of the state to which the local government belongs',
    example: 'Jigawa',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'The population of the local government',
    example: 132001,
  })
  @IsInt()
  @IsNotEmpty()
  population: number;

  @ApiProperty({
    description: 'An array of frequent disease cases in the local government',
    example: ['Malaria', 'Cholera'],
    required: false,
  })
  @IsArray()
  @IsOptional()
  frequentDiseaseCases?: string[];

//   @ApiProperty({
//     description: 'The ID of the user who created this record (optional)',
//     example: 'user-123',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   createdByUserId?: string;
}
