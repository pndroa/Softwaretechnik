"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/Header"

const Dashboard = () => {
  const [session, setSession] = useState<Session | null>()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()

      if (session) {
        setSession(session)
      } else {
        router.push("/auth/signin")
      }
    }
    handleSession()
  }, [router])

  //console.log(session)

  return (
    <div>
      {session ? (
        <>
          <Header session={session} />
          <div>Dashboard</div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Dashboard
