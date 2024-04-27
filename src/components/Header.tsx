"use client"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { FC } from "react"

interface HeaderProps {
  session?: Session // Optional, da die Session eventuell nicht vorhanden ist
}
const Header: FC<HeaderProps> = ({ session }) => {
  console.log(session)
  return <div> Welcome {session?.user?.name}</div>
}

export default Header
