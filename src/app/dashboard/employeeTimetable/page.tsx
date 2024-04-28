"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserProps } from "@/module/databaseConfig"
import Header from "@/components/Header/Header"

const EmployeeTimetable = () => {
  const [session, setSession] = useState<Session>()
  const [user, setUser] = useState<UserProps>()
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
      <div>Timetable of Employee Eric Freeman</div>
    </div>
  )
}

export default EmployeeTimetable
