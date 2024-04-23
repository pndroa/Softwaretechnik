import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    return NextResponse.json({ msg: "Nichts drinnen" }, { status: 200 })
  } catch (error) {
    return NextResponse.json(error)
  }
}
