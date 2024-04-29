"use client"
import React, { useState } from "react"

const Vacation = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [duration, setDuration] = useState("")
  const [remainingDays, setRemainingDays] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", {
      startDate,
      endDate,
      duration,
      remainingDays,
      comment,
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
            <tr>
              <td>Remaining Days:</td>
              <td>
                <input
                  type="number"
                  value={remainingDays}
                  onChange={(e) => setRemainingDays(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Comment:</td>
              <td>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
