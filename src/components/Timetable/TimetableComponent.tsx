import * as React from "react"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs"
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar"

const TimetableComponent = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
  )
}
export default TimetableComponent
