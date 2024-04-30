"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const [session, setSession] = useState<Session | null | undefined>()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()
      setSession(session)
    }
    handleSession()
  }, [])

  console.log(session)

  if (session?.user) {
    router.push("/dashboard")
  } else {
    router.push("/auth/signin")
    router.refresh()
  }

  return
}
