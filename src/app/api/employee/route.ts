import prisma from "../../../../prisma"
import { connectToDatabase } from "@/module/server"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connectToDatabase()
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(error)
  } finally {
    await prisma.$disconnect()
  }
}
