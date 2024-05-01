"use client"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Employee } from "@/module/employee"

const Vacation = () => {
  const [startDate, setStartDate] = useState<string>()
  const [endDate, setEndDate] = useState<string>()
  const [duration, setDuration] = useState<string>()
  const [vacationRequestStatus, setVacationRequestStatus] = useState()
  const [vacationRequest, setVacationRequest] = useState()
  const [session, setSession] = useState<Session | null>()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()
      setSession(session)
    }
    handleSession()
  }, [])

  const employee = new Employee(session?.user?.name as string)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Form submitted:", {
      startDate,
      endDate,
      duration: Number(duration),
      vacationRequestStatus: 1,
      vacationRequest: false,
    })

    employee.setVacation(
      startDate as string,
      endDate as string,
      Number(duration) as number
    )

    const vacation = employee.getVacation()

    await fetch(`http://localhost:3000/api/employee/${session?.user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vacation),
    })
  }

  return (
    <div>
      <h1>Vacation</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Desc</th>
              <th>Wert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start Date:</td>
              <td>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>End Date:</td>
              <td>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
}

export default Vacation
