import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
  log: ["info", "warn", "error"],
});
const db = prismaClient;

export default db;
