"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/Header/Header"
import Tabel from "@/components/EmployeeTimetable/EmployeeTimetable"

const EmployeeTimetable = () => {
  const [session, setSession] = useState<Session>()
  const [user, setUser] = useState()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()

      if (session) {
        setSession(session)
        await fetch(`/api/employee`)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setUser(data)
          })
      } else {
        router.push("/auth/signin")
      }
    }
    handleSession()
  }, [router])

  return (
    <div>
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
        <Tabel />
      </div>
    </div>
  )
}

export default EmployeeTimetable
