"use client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";
import { useState } from "react";
import styles from './MessagesDesign.module.css';

const Messages = () => {

  // Definieren Sie eine Funktion, um Nachrichtenobjekte zu erstellen
  function createMessage(id, message) {
  return { id: id, message: message };
  }

  // Erstellen Sie verschiedene Nachrichtenobjekte
  const sickMessage = createMessage('1', 'HR confirmed  as sick');
  const vacationMessage = createMessage('2', "Ask's for Vacation");
  const overtimeRMessage = createMessage('2', 'Reducing overtime');
  const overtimeMessage = createMessage('2', 'Exceeded maximum amount of overhours');
  const tooLittleBreakMessage = createMessage('1', 'Takes too little break');

  function buttonConfirm(){
    <Button variant="contained" startIcon={<ShoppingCartRounded />}>
    Add item
    </Button>
  }


  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {name: "Eric Freeman", message: sickMessage.message , option: sickMessage.id === '1' ? 'antw1' : 'antw2'},
    { name: "Jessica Grinder", message: vacationMessage.message, option: vacationMessage.id === '2' ? 'antw1' : 'antw2'},
    { name: "Anna Greenfield", message: overtimeRMessage.message, option: overtimeRMessage.id === '2' ? 'antw1' : 'antw2'},
    { name: "Hanna Buckford", message: overtimeMessage.message, option: overtimeMessage.id === '2' ? 'antw1' : 'antw2'},
    { name: "Samuel Jackson", message: tooLittleBreakMessage.message, option: tooLittleBreakMessage.id === '1' ? 'antw1' : 'antw2'},
  ]);

  // Genauer definierte Typen für columnDefs
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "message" },
    { field: "option" },
  ]);

  return (
    <div className={styles.display}>
    <div className="ag-theme-quartz" style={{ height: 300, width: 550}}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
    </div>
  );
};

export default Messages;
