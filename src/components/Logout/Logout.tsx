"use client"
import { signOut } from "next-auth/react"
import React from "react"

const Logout = () => {
  return (
    <div
      onClick={() => {
        signOut()
      }}
    >
      click here to log out
    </div>
  )
}

export default Logout
