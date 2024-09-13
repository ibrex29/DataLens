import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createManyLocalGovernments() {
  const jigawaState = await prisma.state.findFirst({
    where: { name: 'Jigawa' }, // Assuming the state name is "Jigawa"
  });

  if (!jigawaState) {
    throw new Error('State Jigawa not found');
  }

  // Data for local governments
  const localGovernments = [
    { name: 'Babura', population: 208101 },
    { name: 'Birniwa', population: 142329 },
    { name: 'Buji', population: 97371 },
    { name: 'Birnin Kudu', population: 313373 },
    { name: 'Dutse', population: 246143 },
    { name: 'Gumel', population: 107161 },
    { name: 'Gwaram', population: 272582 },
    { name: 'Gwiwa', population: 124517 },
    { name: 'Gagarawa', population: 80394 },
    { name: 'Guri', population: 115018 },
    { name: 'Garki', population: 152233 },
    { name: 'Hadejia', population: 105628 },
    { name: 'Jahun', population: 229094 },
    { name: 'Kiri Kasamma', population: 191523 },
    { name: 'Kafin Hausa', population: 271058 },
    { name: 'Kazaure', population: 161494 },
    { name: 'Kiyawa', population: 172913 },
    { name: 'Kaugama', population: 127956 },
    { name: 'Mallam Madori', population: 161413 },
    { name: 'Miga', population: 128424 },
    { name: 'Maigatari', population: 179715 },
    { name: 'Roni', population: 77819 },
    { name: 'Ringim', population: 192024 },
    { name: 'Taura', population: 130849 },
    { name: 'Sule Tankarkar', population: 131757 },
    { name: 'Yankwashi', population: 95759 },
  ];

  // Prepare the data for Prisma's createMany
  const localGovernmentData = localGovernments.map((lg) => ({
    name: lg.name,
    stateId: jigawaState.id, // Use the state ID for Jigawa
    population: lg.population,
    frequentDiseaseCases: [], // Set to an empty array (or null if you prefer)
    createdByUserId: null, // Assuming createdByUserId is optional and null
  }));

  // Use createMany to batch insert local governments
  const createdLocalGovernments = await prisma.localGovernment.createMany({
    data: localGovernmentData,
    skipDuplicates: true, // Optional: skips records that already exist
  });

  console.log('Local Governments created:', createdLocalGovernments);
  return createdLocalGovernments;
}

// Call the function to create local governments
createManyLocalGovernments()
  .then(() => {
    console.log('Batch creation successful');
  })
  .catch((error) => {
    console.error('Error during batch creation:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
