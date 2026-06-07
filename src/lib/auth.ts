import { expo } from "@better-auth/expo";
import { passkey } from "@better-auth/passkey";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth/minimal";
import { getPrismaClient } from "./db";

export const auth = () => {
  const prisma = getPrismaClient();

  return betterAuth({
    trustedOrigins: ["cabincollection://"],
    user: { modelName: "users" },
    session: { modelName: "sessions" },
    account: { modelName: "accounts" },
    verification: { modelName: "verifications" },
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    plugins: [
      passkey({ schema: { passkey: { modelName: "passkeys" } } }),
      expo(),
    ],
  });
};
