"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserProps } from "@/module/databaseConfig"
import Header from "@/components/Header/Header"
import Workday from "@/components/Timetable/TimetableComponent"

const Timetable = () => {
  const [session, setSession] = useState<Session>()
  const [user, setUser] = useState<UserProps>()
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
    <div>
      <div style={{ paddingTop: "5rem" }}>Timetable of {user?.name}</div>
      <Workday />
    </div>
  )
}

export default Timetable
