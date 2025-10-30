import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma/client";
// If your Prisma file is located elsewhere, you can change the path

const prisma = new PrismaClient();
export const auth = betterAuth({
  
  baseURL: "http://localhost:3000", // not according to documantion should be in this page not in  auth clienet.ts
  database: prismaAdapter(prisma,{
    provider: "sqlite", // or "mysql", "postgresql", ...etc

  }),
  emailAndPassword: {
    enabled: true,
  },
});
