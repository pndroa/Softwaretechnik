import { connectToDatabase } from "@/module/server"
import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../../prisma"

export const GET = async (
  _: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await connectToDatabase()
    const data = await prisma.user.findMany({
      where: {
        email: params.email,
      },
    })
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(error)
  } finally {
    await prisma.$disconnect()
  }
}
