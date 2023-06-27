import React from 'react';
import DefectTable from "./DefectTable";
import './App.css';

const App = ({ defects }) => {
  return <>
    <h3>Defect Details</h3>
    <DefectTable data={defects}/>
  </>
}

export default App;
