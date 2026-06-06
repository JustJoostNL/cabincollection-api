import { env } from "cloudflare:workers";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma";

export function getPrismaClient(): PrismaClient {
  const adapter = new PrismaPg({
    connectionString: env.HYPERDRIVE.connectionString,
  });
  const prisma = new PrismaClient({ adapter });

  return prisma;
}
