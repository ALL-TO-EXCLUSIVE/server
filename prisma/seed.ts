import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';
import {villages} from "../src/lib/village"
const prisma = new PrismaClient();

async function main() {
   // 1. Create a village
  const village = await prisma.village.upsert({
    where: { name: "TestVillage" },
    update: {},
    create: {
      name: "TestVillage",
      district: "Surat",
      state: "Gujarat",
    },
  });

  // 2. Create a hashed password
  const hashedPassword = await bcrypt.hash("admin123", 10); // 🔐 test password

  // 3. Create a member with VILLAGE_ADMIN role
  const member = await prisma.member.create({
    data: {
      name: "Village Admin User",
      email: "admin@test.com",
      phone: "9876543210",
      password: hashedPassword,
      role: "VILLAGE_ADMIN",
      villageId: village.id,
      isActive: true,
    },
  });

  // 4. Create VillageAdmin record and link to member
  await prisma.villageAdmin.create({
    data: {
      memberId: member.id,
      villageId: village.id,
    },
  });

  console.log('✅ Seeding complete.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    // process.exit(1); // Commented out to avoid "Cannot find name 'process'" error in non-Node environments
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
