import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsInt, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'The page number to retrieve',
    example: 1,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    description: 'The number of items per page',
    example: 10,
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
