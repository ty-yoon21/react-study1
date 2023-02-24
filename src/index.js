import React from 'react';
import ReactDOM from 'react-dom/client';  //--> react 18 ver.
import './index.css';
import reportWebVitals from './reportWebVitals';

const MainApp = require("./App").default;

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

/**
 *  React Ver. 17.
 */

// import ReactDOM from 'react-dom';
// ReactDOM.render(<MainApp />, document.getElementById('root'));
// const root = document.getElementById('root');
// let lender = () => {
//   const MainApp = require('./App').default;
//   ReactDOM.render(
//     <React.StrictMode>
//       <MAinApp/>
//     </React.StrictMode>,
//     rootE1
//   );
// };
