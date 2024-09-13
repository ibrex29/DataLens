import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { PrismaService } from 'prisma/prisma.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { Facility } from '@prisma/client';
import { PaginationDto } from 'src/common/pagination.dto';

@Injectable()
export class FacilityService {
  constructor(private readonly prisma:PrismaService){}
  
    async createFacility(createFacilityDto: CreateFacilityDto) {
      const {
        facilityName,
        longitude,
        latitude,
        physicalAddress,
        postalAddress,
        accessRoad,
        name,
        description,
        outPatientServices,
        inPatientServices,
        medicalServices,
        emergencyPreparedness,
        surgicalServices,
        obstericsServices,
        pediatricsServices,
        dentalServices,
        specificClinicalServices,
        onsiteLaboratory,
        onsiteImaging,
        onsitePharmacy,
        mortuaryServices,
        ambulanceServices,
        ownershipName,
        ownershipType,
        facilityLevel,
        facilityLevelOption,
        daysOfOperation,
        hoursOfOperation,
        operational,
        registration,
        license,
        numberOfDoctors,
        numberOfPharmacists,
        numberOfPharmacyTechnicians,
        numberOfDentists,
        numberOfDentalTechnicians,
        numberOfNurses,
        numberOfMidwifes,
        numberOfNursesMidwifes,
        numberOfLabTechnicians,
        numberOfLabScientists,
        healthRecordsHIMOfficers,
        numberOfCommunityHealthOfficers,
        numberOfCommunityHealthExtensionWorkers,
        numberOfJuniorCommunityHealthExtensionWorkers,
        numberOfEnvironmentalHealthOfficers,
        numberOfHealthAttendantsAssistants,
        wardName, 
      } = createFacilityDto;
  
      // Fetch the related ward by name
      const ward = await this.prisma.ward.findFirst({
        where: { name: wardName },
      });
  
      if (!ward) {
        throw new NotFoundException('Ward not found');
      }
  
      // Create the facility along with related records
      const facility = await this.prisma.facility.create({
        data: {
          facilityName,
          ward: {
            connect: { id: ward.id },
          },
          location: {
            create: {
              longitude,
              latitude,
              physicalAddress,
              postalAddress,
              accessRoad,
            },
          },
          services: {
            create: {
              name,
              description,
              outPatientServices,
              inPatientServices,
              medicalServices,
              emergencyPreparedness,
              surgicalServices,
              obstericsServices,
              pediatricsServices,
              dentalServices,
              specificClinicalServices,
              onsiteLaboratory,
              onsiteImaging,
              onsitePharmacy,
              mortuaryServices,
              ambulanceServices,
            },
          },
          FacilityIdentifier: {
            create: {
              ownershipName,
              ownershipType,
              facilityLevel,
              facilityLevelOption,
              daysOfOperation,
              hoursOfOperation,
              registration,
              license,
            },
          },
          FacilityStaff: {
            create: {
              numberOfDoctors,
              numberOfPharmacists,
              numberOfPharmacyTechnicians,
              numberOfDentists,
              numberOfDentalTechnicians,
              numberOfNurses,
              numberOfMidwifes,
              numberOfNursesMidwifes,
              numberOfLabTechnicians,
              numberOfLabScientists,
              healthRecordsHIMOfficers,
              numberOfCommunityHealthOfficers,
              numberOfCommunityHealthExtensionWorkers,
              numberOfJuniorCommunityHealthExtensionWorkers,
              numberOfEnvironmentalHealthOfficers,
              numberOfHealthAttendantsAssistants,
            },
          },
        },
      });
  
      return facility;
    }
  
    async getFacilitiesByWardName(localGovernmentName: string): Promise<Facility[]> {

      const localGovernment = await this.prisma.localGovernment.findFirst({
        where: { name: localGovernmentName },
      });
  
      if (!localGovernment) {
        throw new NotFoundException('Local Government Area not found');
      }

    // Find all wards associated with the local government area
    const wards = await this.prisma.ward.findMany({
      where: { localGovernmentId: localGovernment.id },
    });

    if (!wards.length) {
      throw new NotFoundException('No wards found for the specified local government area');
    }
  // Fetch facilities by ward IDs with related entities included
  const facilities = await this.prisma.facility.findMany({
    where: {
      wardId: {
        in: wards.map(ward => ward.id),
      },
    },
    include: {
      location: true,
      services: true,
      FacilityIdentifier: true,
      FacilityStaff: true,
    },
  });

  if (!facilities.length) {
    throw new NotFoundException('No facilities found for the specified local government area');
  }

  return facilities;
}
  
async getFacilitiesByLocalGovernment(localGovernmentName: string, paginationDto: PaginationDto): Promise<{
  data: Facility[];
  count: number;
}> {
  // Find the local government area by name
  const localGovernment = await this.prisma.localGovernment.findFirst({
    where: { name: localGovernmentName },
  });

  if (!localGovernment) {
    throw new NotFoundException('Local Government Area not found');
  }

  // Find all wards associated with the local government area
  const wards = await this.prisma.ward.findMany({
    where: { localGovernmentId: localGovernment.id },
  });

  if (!wards.length) {
    throw new NotFoundException('No wards found for the specified local government area');
  }

  // Pagination parameters
  const { page = 1, limit = 10 } = paginationDto;
  const skip = (page - 1) * limit;
  const take = Number(limit); // Ensure limit is a number

  // Fetch facilities by ward IDs with related entities included and pagination
  const [facilities, totalFacilities] = await Promise.all([
    this.prisma.facility.findMany({
      where: {
        wardId: {
          in: wards.map(ward => ward.id),
        },
      },
      include: {
        location: true,
        services: true,
        FacilityIdentifier: true,
        FacilityStaff: true,
      },
      skip,
      take,
    }),
    this.prisma.facility.count({
      where: {
        wardId: {
          in: wards.map(ward => ward.id),
        },
      },
    }),
  ]);

  if (!facilities.length) {
    throw new NotFoundException('No facilities found for the specified local government area');
  }

  return {
    data: facilities,
    count: totalFacilities,
  };
}

  findAll() {
    return `This action returns all facility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facility`;
  }

  update(id: number, updateFacilityDto: UpdateFacilityDto) {
    return `This action updates a #${id} facility`;
  }

  remove(id: number) {
    return `This action removes a #${id} facility`;
  }
}
