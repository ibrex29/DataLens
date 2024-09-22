import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsBoolean, ValidateNested, IsInt } from 'class-validator';


export class CreateFacilityDto {
// location details

@ApiProperty({
    description: 'Name of the hospital/facility ',
    example: 'General Hospital',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  facilityName: string;

  @ApiProperty({
    description: 'Name of the hospital/facility ',
    example: 'General Hospital',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  wardName: string;


  @ApiProperty({
    description: 'Longitude of the facility location',
    example: 12.345678,
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @ApiProperty({
    description: 'Latitude of the facility location',
    example: 98.765432,
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @ApiProperty({
    description: 'Physical address of the facility',
    example: '123 Health St, Cityville',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  physicalAddress: string;

  @ApiProperty({
    description: 'Postal address of the facility',
    example: 'PO Box 456, Cityville',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  postalAddress?: string;

  @ApiProperty({
    description: 'Indicates if the facility has access road',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  accessRoad: boolean;

// services offered

  @ApiProperty({
    description: 'Name of the service offered by the facility',
    example: 'Emergency Care',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description of the service',
    example: 'Provides emergency medical care',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Indicates if outpatient services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  outPatientServices: boolean;

  @ApiProperty({
    description: 'Indicates if inpatient services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  inPatientServices: boolean;

  @ApiProperty({
    description: 'Indicates if medical services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  medicalServices: boolean;

  @ApiProperty({
    description: 'Indicates if emergency preparedness services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  emergencyPreparedness: boolean;

  @ApiProperty({
    description: 'Indicates if surgical services are provided',
    example: false,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  surgicalServices: boolean;

  @ApiProperty({
    description: 'Indicates if obstetrics services are provided',
    example: false,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  obstericsServices: boolean;

  @ApiProperty({
    description: 'Indicates if pediatrics services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  pediatricsServices: boolean;

  @ApiProperty({
    description: 'Indicates if dental services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  dentalServices: boolean;

  @ApiProperty({
    description: 'Specific clinical services offered',
    example: ['Cardiology', 'Neurology'],
    type: [String],
  })
  @IsNotEmpty()
  specificClinicalServices: string[];

  @ApiProperty({
    description: 'Indicates if onsite laboratory services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  onsiteLaboratory: boolean;

  @ApiProperty({
    description: 'Indicates if onsite imaging services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  onsiteImaging: boolean;

  @ApiProperty({
    description: 'Indicates if onsite pharmacy services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  onsitePharmacy: boolean;

  @ApiProperty({
    description: 'Indicates if mortuary services are provided',
    example: false,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  mortuaryServices: boolean;

  @ApiProperty({
    description: 'Indicates if ambulance services are provided',
    example: true,
    type: Boolean,
  })
  @IsNotEmpty()
  @IsBoolean()
  ambulanceServices: boolean;

//   FacilityIdentifier 

  @ApiProperty({
    description: 'Ownership name of the facility',
    example: 'Health Authority',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  ownershipName: string;

  @ApiProperty({
    description: 'Type of ownership',
    example: 'Government',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  ownershipType: string;

  @ApiProperty({
    description: 'Level of the facility',
    example: 'Primary',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  facilityLevel: string;

  @ApiProperty({
    description: 'Facility level option',
    example: 'Clinic',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  facilityLevelOption: string;

  @ApiProperty({
    description: 'Days of operation',
    example: 'Monday to Friday',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  daysOfOperation: string;

  @ApiProperty({
    description: 'Hours of operation',
    example: '08:00 - 17:00',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  hoursOfOperation: string;

  @ApiProperty({
    description: 'Operational status of the facility',
    example: 'Operational',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  operational: string;

  @ApiProperty({
    description: 'Registration details of the facility',
    example: 'Reg123456',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  registration: string;

  @ApiProperty({
    description: 'License details of the facility',
    example: 'License123456',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  license: string;

//   @ApiProperty({
//     description: 'Unique identifier for the facility.',
//     example: 'e8d4e9b4-49a3-4b0e-8f3b-cb6d2a8c7a8b'
//   })
//   @IsString()
//   facilityId: string;

// FacilityStaff

  @ApiProperty({
    description: 'Number of doctors in the facility.',
    example: 5,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfDoctors?: number;

  @ApiProperty({
    description: 'Number of pharmacists in the facility.',
    example: 3,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfPharmacists?: number;

  @ApiProperty({
    description: 'Number of pharmacy technicians in the facility.',
    example: 2,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfPharmacyTechnicians?: number;

  @ApiProperty({
    description: 'Number of dentists in the facility.',
    example: 4,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfDentists?: number;

  @ApiProperty({
    description: 'Number of dental technicians in the facility.',
    example: 1,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfDentalTechnicians?: number;

  @ApiProperty({
    description: 'Number of nurses in the facility.',
    example: 10,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfNurses?: number;

  @ApiProperty({
    description: 'Number of midwives in the facility.',
    example: 2,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfMidwifes?: number;

  @ApiProperty({
    description: 'Number of nurses and midwives combined in the facility.',
    example: 3,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfNursesMidwifes?: number;

  @ApiProperty({
    description: 'Number of lab technicians in the facility.',
    example: 3,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfLabTechnicians?: number;

  @ApiProperty({
    description: 'Number of lab scientists in the facility.',
    example: 2,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfLabScientists?: number;

  @ApiProperty({
    description: 'Number of health records HIM officers in the facility.',
    example: 1,
    required: false
  })
  @IsOptional()
  @IsInt()
  healthRecordsHIMOfficers?: number;

  @ApiProperty({
    description: 'Number of community health officers in the facility.',
    example: 4,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfCommunityHealthOfficers?: number;

  @ApiProperty({
    description: 'Number of community health extension workers in the facility.',
    example: 5,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfCommunityHealthExtensionWorkers?: number;

  @ApiProperty({
    description: 'Number of junior community health extension workers in the facility.',
    example: 2,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfJuniorCommunityHealthExtensionWorkers?: number;

  @ApiProperty({
    description: 'Number of environmental health officers in the facility.',
    example: 1,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfEnvironmentalHealthOfficers?: number;

  @ApiProperty({
    description: 'Number of health attendants assistants in the facility.',
    example: 3,
    required: false
  })
  @IsOptional()
  @IsInt()
  numberOfHealthAttendantsAssistants?: number;
}



