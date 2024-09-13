import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatemetricsService } from './statemetrics.service';
import { CreateStatemetricDto } from './dto/create-statemetric.dto';
import { UpdateStatemetricDto } from './dto/update-statemetric.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateLocalGovernmentDto } from './dto/create-lg.dto';
import { CreateWardDto, } from './dto/create-ward.dto';
import { CreateManyWardsDto } from './dto/create-many-wards.dto';

@ApiTags("state management")
@Controller('statemetrics')
export class StatemetricsController {
  constructor(private readonly statemetricsService: StatemetricsService) {}

  // @Post()
  // create(@Body() createStatemetricDto: CreateStatemetricDto) {
  //   return this.statemetricsService.create(createStatemetricDto);
  // }

  // @Post('create-ward')
  // async createManyWard(@Body() createWardsDto: CreateWardDto) {
  //   return this.statemetricsService.createWard(createWardsDto);
  // }

  // @Post('create-many-wards')
  // async createManyWards(@Body() createManyWardsDto: CreateManyWardsDto) {
  //   return this.statemetricsService.createManyWards(createManyWardsDto);
  // }

  @Get('jigawa-stats')
  async getJigawaStats() {
    return await this.statemetricsService.getJigawaStats();
  }

  @Get("all-states")
  findAll() {
    return this.statemetricsService.findAllState();
  }

  @Get("all-lg")
  findAllLg() {
    return this.statemetricsService.findAllLg();
  }
  @Get("all-ward")
  findAllWard() {
    return this.statemetricsService.findAllWard();
  }


  @Get("ward-with-lga")
  findAllWardwithLga() {
    return this.statemetricsService.findAllLocalGovernmentsWithWards();
  }
  // @Post("createLg")
  // async createsingleLg(@Body() createLocalGovernmentDto: CreateLocalGovernmentDto) {
  //   return this.statemetricsService.createLg(createLocalGovernmentDto);
  // }

  // @Post("createManyLg")
  // async createMany(@Body() data: CreateLocalGovernmentDto[]) {
  //   return this.statemetricsService.createManyLgs(data);
  // }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.statemetricsService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateStatemetricDto: UpdateStatemetricDto) {
//     return this.statemetricsService.update(+id, updateStatemetricDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.statemetricsService.remove(+id);
//   }
// }
}