export class EmployeeTimetable {
  workDate: string
  weekday: string
  beginHours: string
  endHours: string
  hoursTarget: number
  plusOrMinusHours: number
  break: number
  absence: boolean
  comment: string

  constructor(
    workDate: Date,
    weekday: string,
    beginHours: string,
    endHours: string,
    hoursTarget: number,
    plusOrMinusHours: number,
    breakTime: number,
    absence: boolean,
    comment: string
  ) {
    const day = workDate.getDate()
    const month = workDate.getMonth() + 1
    const year = workDate.getFullYear()
    this.workDate = `${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}`
    this.weekday = weekday
    this.beginHours = beginHours
    this.endHours = endHours
    this.hoursTarget = hoursTarget
    this.plusOrMinusHours = plusOrMinusHours
    this.break = breakTime // Setze die Pause entsprechend dem Parameter
    this.absence = absence
    this.comment = comment
  }

  calculateWorkHours(): number {
    const beginTime = new Date(this.workDate + " " + this.beginHours)
    const endTime = new Date(this.workDate + " " + this.endHours)
    const diffMilliseconds = endTime.getTime() - beginTime.getTime()
    const diffHours = diffMilliseconds / (1000 * 60 * 60) // Stunden
    const realWorkHours = diffHours - this.break
    this.hoursTarget = realWorkHours
    this.plusOrMinusHours = realWorkHours - 8
    return diffHours
  }
}
