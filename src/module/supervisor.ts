import { Employee } from "./employee"

export class Supervisor extends Employee {
  //0 = noRequest, 1 = requested, 2 = requestConfirmed, 3 = requestRejected

  setEmployeeVacationRequestStatus(vacationRequestStatus: number): void {
    if (super.getvacationRequestStatus() === 1) {
      super.setvacationRequestStatus(vacationRequestStatus)
    }
    return super.getvacationRequestStatus()
  }
}
