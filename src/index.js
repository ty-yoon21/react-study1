import React from 'react';
//import ReactDOM from 'react-dom';       //--> react 18 ver.
import ReactDOM from 'react-dom/client';  //--> react 18 ver.
import './index.css';
//import MainApp from './App';
//import MainApp from './App';
import reportWebVitals from './reportWebVitals';

const MainApp = require("./App").default;

//react v17
//ReactDOM.render(<MainApp />, document.getElementById('root'));


//react v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endp int. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
