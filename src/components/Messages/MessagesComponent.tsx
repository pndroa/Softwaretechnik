import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { ColDef } from "ag-grid-community"
import { useEffect, useState } from "react"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"

interface Data {
  email: string
  id: string
  name: string
  password: string
  role: string
  vacationDays: number
  vacationEnd: string
  vacationRequest: boolean
  vacationRequestStatus: number
  vacationStart: string
}

interface RowProps {
  name: string
  message: string
}

const Messages = () => {
  const [session, setSession] = useState<Session | null | undefined>()
  const [data, setData] = useState<Data>({} as Data)
  const [rowData, setRowData] = useState<RowProps>([] as unknown as RowProps)

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()
      setSession(session)
    }
    handleSession()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/employee/eric.freeman@stc.com`)
      const jsonData = await res.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "message" },
  ])

  useEffect(() => {
    let message = ""

    if (data.vacationRequestStatus === 2) {
      message = "Jajajaja"
    } else {
      message = "reject"
    }

    setRowData([
      { name: "Bryson Mills ", message: message },
      { name: "Eric Freeman", message: "" },
      { name: "Jessica Grinder", message: "" },
      { name: "Anna Greenfield", message: "" },
      { name: "Hanna Buckford", message: "" },
      { name: "Samuel Jackson", message: "" },
    ])
  }, [])

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

export default Messages
