"use client"
import { signIn } from "next-auth/react"
import React, { FormEvent } from "react"
import { getServerSession } from "next-auth"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })

    if (!response?.error) {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="E-Mail" name="email" type="email" />
      <input placeholder="Password" name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
