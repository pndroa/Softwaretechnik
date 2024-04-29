"use client"
import styles from "./Login.module.css"
import { SignInResponse, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react"

export default function Login() {
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

  if (res?.ok) {
    router.push("/dashboard")
    router.refresh()
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>Login</div>
        <div className={styles.content}></div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Email Address</label>
            <input
              type="email"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
            />
          </div>
          <div className={styles.passwordRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
              />
            </div>
            <div className={styles.forgotPassword}>
              <span className={styles.forgotPasswordText}>
                Forgot Password?
              </span>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.rememberPassword}>
              <input
                type="checkbox"
                id="savePassword"
                className={styles.savePasswordCheckbox}
              />
              <label htmlFor="savePassword">Remember Password</label>
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
