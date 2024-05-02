"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TimetableComponent from "@/components/Timetable/TimetableComponent"

const Timetable = () => {
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
    <div>
      <TimetableComponent></TimetableComponent>
    </div>
  )
}

export default Timetable
