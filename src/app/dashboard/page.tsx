"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DashboardComponent from "@/components/Dashboard/Dashboard"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

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

  return (
    <div>
      <Header />
      <DashboardComponent />
      <Footer />
    </div>
  )
}

export default Dashboard
