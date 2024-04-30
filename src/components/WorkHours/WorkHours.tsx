"use client"
import { EmployeeTimetable } from "@/module/employee"
import React, { useState } from "react"

const WorkHours = () => {
  const [date, setDate] = useState("")
  const [dayOfWeek, setDayOfWeek] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [breakTime, setBreakTime] = useState("")
  const [targetWorkHours, setTargetWorkHours] = useState("")
  const [actualWorkHours, setActualWorkHours] = useState("")
  const [absence, setAbsence] = useState(false)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", {
      date,
      dayOfWeek,
      startTime,
      endTime,
      breakTime,
      targetWorkHours,
      actualWorkHours,
      absence,
      comment,
    })
  }

  return (
    <div>
      <h1>Enter Working Time</h1>
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
              <td>Date:</td>
              <td>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Day of Week:</td>
              <td>
                <select
                  value={dayOfWeek}
                  onChange={(e) => setDayOfWeek(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Start Time:</td>
              <td>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>End Time:</td>
              <td>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Break Time:</td>
              <td>
                <input
                  type="time"
                  value={breakTime}
                  onChange={(e) => setBreakTime(e.target.value)}
                  step="3600"
                />
              </td>
            </tr>
            <tr>
              <td>Target Work Hours:</td>
              <td>
                <input
                  type="number"
                  value={targetWorkHours}
                  onChange={(e) => setTargetWorkHours(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Actual Work Hours:</td>
              <td>
                <input
                  type="number"
                  value={actualWorkHours}
                  onChange={(e) => setActualWorkHours(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Absence:</td>
              <td>
                <input
                  type="checkbox"
                  checked={absence}
                  onChange={(e) => setAbsence(e.target.checked)}
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

export default WorkHours
