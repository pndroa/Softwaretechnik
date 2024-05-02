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
export const PATCH = async (
  request: Request,
  { params }: { params: { email: string } }
) => {
  try {
    await connectToDatabase()

    const body = await request.json()

    const {
      vacationStart,
      vacationEnd,
      vacationDays,
      vacationRequestStatus,
      vacationRequest,
    } = body

    // Benutzer aktualisieren
    const updatedUser = await prisma.user.update({
      where: {
        email: params.email,
      },
      data: {
        vacationStart,
        vacationEnd,
        vacationDays,
        vacationRequestStatus,
        vacationRequest,
      },
    })

    const user = await prisma.user.findUnique({
      where: {
        email: params.email,
      },
    })

    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json(error)
  } finally {
    await prisma.$disconnect()
  }
}
