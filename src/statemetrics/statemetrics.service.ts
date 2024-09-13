import { Injectable } from '@nestjs/common';
import { CreateStatemetricDto } from './dto/create-statemetric.dto';
import { UpdateStatemetricDto } from './dto/update-statemetric.dto';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLocalGovernmentDto } from './dto/create-lg.dto';
import { CreateWardDto } from './dto/create-ward.dto';
import { CreateManyWardsDto } from './dto/create-many-wards.dto';
// import { CreateWardDto, CreateWardsDto } from './dto/create-ward.dto';

@Injectable()
export class StatemetricsService {
  constructor(private readonly prisma:PrismaService){}

  // create(createStatemetricDto: CreateStatemetricDto) {
  //   return 'This action adds a new statemetric';
  // }
  // async createMany(createWardsDto: CreateWardsDto) {
  //   const { wards } = createWardsDto;
  //   const localGovernment = await this.prisma.state.findFirst({
  //     where: { name: createWardsDto. }, // Assuming stateId is the state name (if not, adjust accordingly)
  //   });
  //   return this.prisma.ward.createMany({
  //     data: wards.map(ward => ({
  //       name: ward.name,
  //       population: ward.population ?? null,
  //       healthCases: ward.healthCases ?? null,
  //       localGovernmentId: ward.localGovernment,
  //     })),
  //   });
  // }

  async createWard(data: CreateWardDto) {
    // Find the Local Government by its name
    const localGovernment = await this.prisma.localGovernment.findFirst({
      where: {
        name: data.localGovernment,
      },
    });

    // Check if the Local Government exists
    if (!localGovernment) {
      throw new Error('Local Government not found');
    }

    // Create and return the new Ward
    return this.prisma.ward.create({
      data: {
        name: data.name,
        population: data.population || null,  // Default to null if not provided
        healthCases: data.healthCases || null, // Default to null if not provided
        localGovernment: {
          connect: {
            id: localGovernment.id, // Connect using the id of the Local Government
          },
        },
      },
    });
  }

  async createManyWards(data: CreateManyWardsDto) {
    const { wards } = data;

    // Prepare an array of ward creation data
    const wardData = await Promise.all(
      wards.map(async (ward) => {
        // Find the Local Government by its name
        const localGovernment = await this.prisma.localGovernment.findFirst({
          where: {
            name: ward.localGovernment,
          },
        });

        // Check if the Local Government exists
        if (!localGovernment) {
          throw new Error(`Local Government "${ward.localGovernment}" not found`);
        }

        return {
          name: ward.name,
          population: ward.population ?? null,  
          healthCases: ward.healthCases ?? null, 
          localGovernmentId: localGovernment.id, 
        };
      }),
    );

    return this.prisma.ward.createMany({
      data: wardData,
    });
  }


  async findAllLocalGovernmentsWithWards() {
    return this.prisma.localGovernment.findMany({
      select: {
        name: true, 
        population:true,
        frequentDiseaseCases:true,
        wards: {
          select: {
            name: true, 
            population: true, 
            healthCases: true, 
          },
        },
      },
    });
  }

  findAllWard() {
    return this.prisma.ward.findMany({
      select:{
        name:true,
        population:true,
        healthCases:true
      }
    });
  }
  
  findAllLg() {
    return this.prisma.localGovernment.findMany({
      select:{
        name:true,
        population:true,
        frequentDiseaseCases:true
      }
    });
  }

  async findAllState() {
    return this.prisma.state.findMany({
      select: {
        name: true,
        population: true,
      },
    });
  }

 
  async getJigawaStats() {
    const jigawaState = await this.prisma.state.findFirst({
      where: { name: 'Jigawa' },
      include: {
        localGovernments: {
          include: {
            wards: true
          }
        }
      }
    });
  
    if (!jigawaState) {
      throw new Error('Jigawa state not found');
    }
  
    const totalLocalGovernments = jigawaState.localGovernments.length;
    const totalWards = jigawaState.localGovernments.reduce((acc, lg) => acc + lg.wards.length, 0);
  
    return {
      totalLocalGovernments,
      totalWards
    };
  }

  
  async createLg(data: CreateLocalGovernmentDto) {
    // Find the state by its name
    const state = await this.prisma.state.findFirst({
      where: { name: data.state }, // Assuming stateId is the state name (if not, adjust accordingly)
    });
  
    if (!state) {
      throw new Error('State not found'); // Handle the case where the state does not exist
    }
  
    // Now create the local government with the found state ID
    return this.prisma.localGovernment.create({
      data: {
        name: data.name,
        stateId: state.id, // Use the state's id
        population: data.population,
        frequentDiseaseCases: data.frequentDiseaseCases || [],
        createdByUserId: null,
      },
    });
  }
  
  async  createManyLgs(data: CreateLocalGovernmentDto[]) {
    // First, find the state (assuming all local governments belong to the same state)
    const state = await this.prisma.state.findFirst({
      where: { name: data[0].state }, // Assuming stateId is the name of the state
    });
  
    if (!state) {
      throw new Error('State not found');
    }
  
    // Prepare an array of local governments for createMany
    const localGovernments = data.map((lg) => ({
      name: lg.name,
      stateId: state.id, // Use the state's id for all local governments
      population: lg.population,
      frequentDiseaseCases: lg.frequentDiseaseCases || [],
      createdByUserId:  null,
    }));
  
    // Create many local governments
    const createdLocalGovernments = await this.prisma.localGovernment.createMany({
      data: localGovernments,
      skipDuplicates: true, // Optional: skip records that already exist
    });
  
    console.log('Local governments created:', createdLocalGovernments);
    return createdLocalGovernments;
  }

  findOne(id: number) {
    return `This action returns a #${id} statemetric`;
  }

  update(id: number, updateStatemetricDto: UpdateStatemetricDto) {
    return `This action updates a #${id} statemetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} statemetric`;
  }
}
