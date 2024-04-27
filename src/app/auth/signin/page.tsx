"use client"
import { SignInResponse, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEventHandler, useEffect, useState } from "react"

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" })
  const [res, setRes] = useState<SignInResponse | undefined>()
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    })
    setRes(res)
  }

  console.log(res)

  if (res?.ok) {
    router.push("/dashboard")
    router.refresh()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          placeholder="E-Mail"
        />
        <input
          type="password"
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default SignIn
