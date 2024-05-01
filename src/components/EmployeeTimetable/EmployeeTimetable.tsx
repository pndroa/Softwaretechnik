"use client"
import { AgGridReact } from "ag-grid-react" // AG Grid Component
import "ag-grid-community/styles/ag-grid.css" // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css" // Optional Theme applied to the grid
import { ColDef } from "ag-grid-community"
import { useEffect, useState } from "react"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"

const EmployeeTimetable = () => {
  const [session, setSession] = useState<Session | null | undefined>()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()
      setSession(session)
    }
    handleSession()
  }, [])

  const customButton = () => (
    <div>
      <button
        onClick={async () => {
          await fetch(
            `http://localhost:3000/api/employee/eric.freeman@stc.com`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                vacationRequestStatus: 2,
              }),
            }
          )
          window.alert("Vacation accepted")
        }}
      >
        Accept
      </button>
      <button
        onClick={async () => {
          await fetch(
            `http://localhost:3000/api/employee/eric.freeman@stc.com`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                vacationRequestStatus: 3,
              }),
            }
          )
          window.alert("Vacation rejected")
        }}
      >
        Reject
      </button>
    </div>
  )

  const [rowData, setRowData] = useState([
    {
      name: "Eric Freeman",
      message: "Ask for Vacation",
    },
  ])

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "message" },
    { field: "aktion", cellRenderer: customButton },
  ])

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 270,
        width: 750,
        fontSize: "14px",
        lineHeight: "1.4",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout="autoHeight"
        headerHeight={40}
        onGridReady={(params) => {
          params.api.sizeColumnsToFit()
        }}
      />
    </div>
  )
}

export default EmployeeTimetable
