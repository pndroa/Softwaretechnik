import { connectToDatabase } from "@/database/server"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json()
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalide Data" }, { status: 422 })
    }
    await connectToDatabase()

    const newUser = const prisma.user.

  } catch (error) {
    return NextResponse.json(error)
  }
}
