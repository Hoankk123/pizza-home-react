import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExES6 from './slot1/ExES6';
import DemoES6 from './slot1_chuabai/DemoES6';
import "bootstrap/dist/css/bootstrap.min.css";
import AppTest from './AppTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTest/>
    {/* <App /> */}
    {/* <ExES6 />
    <DemoES6 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
