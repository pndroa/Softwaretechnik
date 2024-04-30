import prisma from "../../../../prisma"
import { connectToDatabase } from "@/module/server"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connectToDatabase()
    const data = await prisma.user.findMany()
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(error)
  } finally {
    await prisma.$disconnect()
  }
}
