"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import MessagesComponent from "@/components/Messages/MessagesComponent"
import Header from "@/components/Header/Header"

const Messages = () => {
  const [session, setSession] = useState<Session>()
  const [user, setUser] = useState()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()

      if (session) {
        setSession(session)
        await fetch(`/api/employee/${session?.user?.email}`)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setUser(data[0])
          })
      } else {
        router.push("/auth/signin")
      }
    }
    handleSession()
  }, [router])

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "10%",
          gap: "1rem",
        }}
      >
        Messages of {session?.user?.name}
        <MessagesComponent />
      </div>
    </>
  )
}

export default Messages
