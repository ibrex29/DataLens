import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const localGovernments = {
    Auyo: await prisma.localGovernment.findFirst({ where: { name: 'Auyo' } }),
    Babura: await prisma.localGovernment.findFirst({ where: { name: 'Babura' } }),
    BirninKudu: await prisma.localGovernment.findFirst({ where: { name: 'Birnin Kudu' } }),
    Birniwa: await prisma.localGovernment.findFirst({ where: { name: 'Birniwa' } }),
    Buji: await prisma.localGovernment.findFirst({ where: { name: 'Buji' } }),
    Dutse: await prisma.localGovernment.findFirst({ where: { name: 'Dutse' } }),
    Gagarawa: await prisma.localGovernment.findFirst({ where: { name: 'Gagarawa' } }),
    Garki: await prisma.localGovernment.findFirst({ where: { name: 'Garki' } }),
    Gumel: await prisma.localGovernment.findFirst({ where: { name: 'Gumel' } }),
    Guri: await prisma.localGovernment.findFirst({ where: { name: 'Guri' } }),
    Gwaram: await prisma.localGovernment.findFirst({ where: { name: 'Gwaram' } }),
    Gwiwa: await prisma.localGovernment.findFirst({ where: { name: 'Gwiwa' } }),
    Hadejia: await prisma.localGovernment.findFirst({ where: { name: 'Hadejia' } }),
    Jahun: await prisma.localGovernment.findFirst({ where: { name: 'Jahun' } }),
    KafinHausa: await prisma.localGovernment.findFirst({ where: { name: 'Kafin Hausa' } }),
    Kaugama: await prisma.localGovernment.findFirst({ where: { name: 'Kaugama' } }),
    Kazaure: await prisma.localGovernment.findFirst({ where: { name: 'Kazaure' } }),
    KirikaSamma: await prisma.localGovernment.findFirst({ where: { name: 'Kirika Samma' } }),
    Kiyawa: await prisma.localGovernment.findFirst({ where: { name: 'Kiyawa' } }),
    Maigatari: await prisma.localGovernment.findFirst({ where: { name: 'Maigatari' } }),
    MalamMadori: await prisma.localGovernment.findFirst({ where: { name: 'Mallam Madori' } }),
    Miga: await prisma.localGovernment.findFirst({ where: { name: 'Miga' } }),
    Ringim: await prisma.localGovernment.findFirst({ where: { name: 'Ringim' } }),
    Roni: await prisma.localGovernment.findFirst({ where: { name: 'Roni' } }),
    SuleTankarkar: await prisma.localGovernment.findFirst({ where: { name: 'Sule Tankarkar' } }),
    Taura: await prisma.localGovernment.findFirst({ where: { name: 'Taura' } }),
    Yankwashi: await prisma.localGovernment.findFirst({ where: { name: 'Yankwashi' } })
  };

  await prisma.ward.createMany({
    data: [
      // Wards for Auyo Local Government
      { name: 'Auyakayi', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Auyo', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Ayama', localGovernmentId: localGovernments.Auyo.id,population: null, healthCases: null },
      { name: 'Ayan', localGovernmentId: localGovernments.Auyo.id,population: null, healthCases: null },
      { name: 'Gamafoi', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Gamsarka', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Gatafa', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Kafur', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Tsidar', localGovernmentId: localGovernments.Auyo.id, population: null, healthCases: null },
      { name: 'Unik', localGovernmentId: localGovernments.Auyo.id,population: null, healthCases: null },

      // Wards for Babura Local Government
      { name: 'Babura', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Batali', localGovernmentId: localGovernments.Babura.id,population: null, healthCases: null },
      { name: 'Dorawa', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Garu', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null},
      { name: 'Gasakoli', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Insharuwa', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Jigawa', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Kanya', localGovernmentId: localGovernments.Babura.id,population: null, healthCases: null},
      { name: 'Kuzunzumi', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Kyambo', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },
      { name: 'Takwasa', localGovernmentId: localGovernments.Babura.id, population: null, healthCases: null },

      // Wards for Birnin Kudu Local Government
      { name: 'Birnin Kudu', localGovernmentId: localGovernments.BirninKudu.id, population: 4100, healthCases: 250 },
      { name: 'Kangire', localGovernmentId: localGovernments.BirninKudu.id, population: 3200, healthCases: 140 },
      { name: 'Kantoga', localGovernmentId: localGovernments.BirninKudu.id, population: 3300, healthCases: 145 },
      { name: 'Kiyako', localGovernmentId: localGovernments.BirninKudu.id, population: 3400, healthCases: 150 },
      { name: 'Kwangwara', localGovernmentId: localGovernments.BirninKudu.id, population: 3500, healthCases: 155 },
      { name: 'Lafiya', localGovernmentId: localGovernments.BirninKudu.id, population: 3600, healthCases: 160 },
      { name: 'Sundimina', localGovernmentId: localGovernments.BirninKudu.id, population: 3700, healthCases: 165 },
      { name: 'Surko', localGovernmentId: localGovernments.BirninKudu.id, population: 3800, healthCases: 170 },
      { name: 'Unguwar"Ya', localGovernmentId: localGovernments.BirninKudu.id, population: 3900, healthCases: 175 },
      { name: 'Wurno', localGovernmentId: localGovernments.BirninKudu.id, population: 4000, healthCases: 180 },
      { name: 'Yalwan Damai', localGovernmentId: localGovernments.BirninKudu.id, population: 4100, healthCases: 185 },

      // Wards for Birniwa Local Government
      { name: 'Batu', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null },
      { name: 'Birniwa', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null },
      { name: 'Dangwaleri', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null },
      { name: 'Diginsa', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null},
      { name: 'Fagi', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null},
      { name: 'Kachallari', localGovernmentId: localGovernments.Birniwa.id,population: null, healthCases: null },
      { name: 'Karanka', localGovernmentId: localGovernments.Birniwa.id, population: null, healthCases: null},
      { name: 'Kazura', localGovernmentId: localGovernments.Birniwa.id, population: 2200, healthCases: 170 },
      { name: 'Machinamari', localGovernmentId: localGovernments.Birniwa.id, population: 2300, healthCases: 180 },
      { name: 'Matamu', localGovernmentId: localGovernments.Birniwa.id, population: 2400, healthCases: 190 },
      { name: 'Nguwa', localGovernmentId: localGovernments.Birniwa.id, population: 2500, healthCases: 200 },

      // Continue similarly for all other wards and local governments...
      
      // Add wards for other Local Governments (Buji, Dutse, Gagarawa, Garki, etc.) here
    ],
  });

  console.log('Wards seeded successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
