"use client"
import { AgGridReact } from "ag-grid-react" // AG Grid Component
import "ag-grid-community/styles/ag-grid.css" // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css" // Optional Theme applied to the grid
import { ColDef } from "ag-grid-community"
import { useState } from "react"

const Messages = () => {
  const [rowData, setRowData] = useState([
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
    { name: "Peter", message: "sdadsadsadadsa", aktion: "sad" },
  ])

  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "message" },
    { field: "aktion" },
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

export default Messages
