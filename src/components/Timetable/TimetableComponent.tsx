import React, { FC, Key, ReactElement, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Vacation from "../Vacation/Vacation"

interface Option {
  label: string
  value: any
}

const TimetableComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setShowOptions(true)
  }

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    setShowOptions(false)
  }

  const options: Option[] = [
    { label: "Work time", value: <Vacation /> },
    { label: "Vacation", value: <Vacation /> },
  ]

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "12%",
        height: "50%",
      }}
    >
      <h1>Calendar Eric</h1>
      <DatePicker
        selected={selectedDate}
        inline
        onSelect={handleDateClick}
        onChange={() => {}} // Fügen Sie das onChange-Prop hinzu, auch wenn es nicht verwendet wird
      />
      {showOptions && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              style={{ marginRight: "10px" }}
            >
              {option.label}
            </button>
          ))}
          <button onClick={() => setShowOptions(false)}>Cancel</button>
        </div>
      )}
      {selectedOption && <p>Selected option: {selectedOption.value}</p>}
    </div>
  )
}

export default TimetableComponent
