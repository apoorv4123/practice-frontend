import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

const DEFECTS = [
  { id: 1, category: "UI", description: "", priority: 2, status: "open", changeStatus: "Close Defect" },
  { id: 2, category: "Functional", description: "", priority: 1, status: "open", changeStatus: "Close Defect" },
  { id: 3, category: "Chnage Request", description: "", priority: 2, status: "Closed", changeStatus: "No action pending" }
];

localStorage.setItem("defects", JSON.stringify(DEFECTS));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
