import "@dotenvx/dotenvx/config";
import { defineConfig } from "prisma/config";

// biome-ignore lint/style/noDefaultExport: Required for Prisma config
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: process.env.DATABASE_URL || undefined },
});
