export class Employee {
  name: string
  vacationStart: string
  vacationEnd: string
  vacationDays: number
  vacationRequest: boolean
  vacationRequestStatus: number //0 = noRequest, 1 = requested, 2 = requestConfirmed, 3 = requestRejected
  vacationStatus: boolean
  message: string

  constructor(name: string) {
    this.name = name
    this.vacationStart = ""
    this.vacationEnd = ""
    this.vacationDays = 30
    this.vacationRequest = false
    this.vacationRequestStatus = 0
    this.vacationStatus = false
    this.message = ""
  }

  getvacationRequestStatus(): any {
    return this.vacationRequestStatus
  }

  setvacationRequestStatus(vacationRequestStatus: number) {
    this.vacationRequestStatus = vacationRequestStatus
  }

  setVacation(
    vacationStart: string,
    vacationEnd: string,
    vacationDays: number
  ): void {
    if (this.vacationRequest === false && this.vacationDays > 0) {
      this.vacationStart = vacationStart
      this.vacationEnd = vacationEnd
      this.vacationRequest = true
      this.vacationRequestStatus = 1
      this.vacationDays -= vacationDays
    } else {
      this.message = "Keine Urlaubsanträge oder Antrag auf Urlaub nicht möglich"
    }
  }

  getVacation(): any {
    return {
      vacationStart: this.vacationStart,
      vacationEnd: this.vacationEnd,
      vacationDays: this.vacationDays,
      vacationRequest: this.vacationRequest,
      vacationRequestStatus: this.vacationRequestStatus,
      vacationStatus: this.vacationStatus,
    }
  }

  setVacationStatus(vacationStatus: boolean): void {
    this.vacationStatus = vacationStatus
  }
}
