import { PrismaClient } from "@prisma/client/"

export const connectToDatabase = async () => {
  try {
    const prisma = new PrismaClient()
    await prisma.$connect()
  } catch (error) {
    throw new Error("Unable to connect to database " + error)
  }
}
