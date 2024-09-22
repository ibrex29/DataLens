import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { FacilityService } from './facility.service';
// import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { Facility } from './entities/facility.entity';
import { PaginationDto } from 'src/common/pagination.dto';

@Controller('facility')
export class FacilityController {
  constructor(private readonly facilityService: FacilityService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new facility' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The facility has been successfully created.',
    type: CreateFacilityDto, // Adjust type if needed
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ward not found.',
  })
  async createFacility(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilityService.createFacility(createFacilityDto);
  }


  // @Get('by-Lg/name/:lgName')
  // @ApiOperation({ summary: 'Get facilities by Lg name' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'List of facilities for the specified Lg.',
  //   type: [Facility], // Adjust type as needed
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   description: 'No facilities found for the specified Lg.',
  // })
  // async getFacilitiesByWardName(@Param('wardName') wardName: string) {
  //   return this.facilityService.getFacilitiesByWardName(wardName);
  // }


  @Get('by-local-government/name/:localGovernmentName')
  @ApiOperation({ summary: 'Get facilities by local government area with pagination' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of facilities for the specified local government area.',
    type: [Facility], // Adjust type as needed
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No facilities found for the specified local government area.',
  })
  async getFacilitiesByLocalGovernment(
    @Param('localGovernmentName') localGovernmentName: string,
    @Query() paginationDto: PaginationDto
  ) {
    return this.facilityService.getFacilitiesByLocalGovernment(localGovernmentName, paginationDto);
  }

  // @Get()
  // findAll() {
  //   return this.facilityService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.facilityService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFacilityDto: UpdateFacilityDto) {
  //   return this.facilityService.update(+id, updateFacilityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.facilityService.remove(+id);
  // }
  @Get("all-facility")  // HTTP GET request for '/facilities'
  async getAllFacilities() {
    return this.facilityService.getAllFacilities();
  }
}
