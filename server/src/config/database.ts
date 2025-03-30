import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
  datasourceUrl: process.env.SIGA_DATABASE_URL,
  log: ["info", "warn", "error"],
});
const db = prismaClient;

export default db;
