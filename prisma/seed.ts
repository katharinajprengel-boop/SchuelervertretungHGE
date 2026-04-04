import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const defaultHomeIntro =
  "Hallo liebe Humboldtianer*innen! Wir sind die Schülersprecher*innen und das Kernteam der Schülervertretung am Humboldt-Gymnasium Eichwalde. Hier findet ihr Infos über uns, unsere aktuellen Projekte und alles, was gerade an der Schule wichtig ist – von Aktionen und Terminen bis hin zu neuen Flyern. Wenn ihr Fragen, Ideen oder Anliegen habt, meldet euch gern bei uns!";

async function main() {
  const email = process.env.OWNER_EMAIL?.trim();
  const password = process.env.OWNER_PASSWORD;

  if (!email || !password) {
    throw new Error("OWNER_EMAIL und OWNER_PASSWORD muessen gesetzt sein.");
  }

  const existing = await prisma.user.findUnique({
    where: { email }
  });

  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: "ADMIN"
      }
    });
  }

  await prisma.siteContent.upsert({
    where: { key: "home" },
    create: {
      key: "home",
      homeIntro: defaultHomeIntro
    },
    update: {}
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
