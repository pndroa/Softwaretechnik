"use client"
import { Session } from "next-auth"
import { getSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import apple from "@/pictures/apple.png"

const Header = () => {
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
    <div className={styles.Header}>
      <Image src={apple} alt="logo" className={styles.profilPicture}></Image>
      <div>
        <h1> {session?.user?.name}</h1>
      </div>
      {session ? (
        <button
          onClick={() => {
            signOut()
          }}
          className={styles.HeaderButton}
        >
          Logout
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Header
