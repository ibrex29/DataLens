import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createAuyoWards() {
  // Find the Auyo local government
  const auyoLocalGovernment = await prisma.localGovernment.findFirst({
    where: { name: 'Auyo' }, // Ensure the local government exists
  });

  if (!auyoLocalGovernment) {
    throw new Error('Local Government Auyo not found');
  }

  // Data for the wards
  const wards = [
    { name: 'Auyakayi',  },
    { name: 'Auyo',  },
    { name: 'Ayama',  },
    { name: 'Ayan', },
    { name: 'Gamafoi',  },
    { name: 'Gamsarka',  },
    { name: 'Gatafa', },
    { name: 'Kafur', },
    { name: 'Tsidar',},
    { name: 'Unik',},
  ];

  // Prepare the data for Prisma's createMany
  const wardData = wards.map((ward) => ({
    name: ward.name,
    localGovernmentId: auyoLocalGovernment.id, // Use the Auyo local government's id
    population: null, // Set population to null
    healthCases: null, // Set healthCases to null
  }));

  // Use createMany to batch insert the wards
  const createdWards = await prisma.ward.createMany({
    data: wardData,
    skipDuplicates: true, // Optional: skips records that already exist
  });

  console.log('Wards created for Auyo Local Government:', createdWards);
  return createdWards;
}

// Call the function to seed the wards for Auyo
createAuyoWards()
  .then(() => {
    console.log('Auyo wards creation successful');
  })
  .catch((error) => {
    console.error('Error during Auyo wards creation:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
