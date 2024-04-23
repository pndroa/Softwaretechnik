import Login from "@/components/Login"
import DashBoard from "@/components/DashBoard"
import Link from "next/link"
import { CardMedia } from "@mui/material"

export default function Home() {
  const name = "jey"

  return (
    <div>
      <Link href="/settings">Employee table</Link>
    </div>
  )
}
