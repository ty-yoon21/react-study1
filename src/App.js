// React
import React from "react";
import './App.css';
import App from "./container/App";

//Main App
import RouteService from "./utils/RouteService";

//UI
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

//Router, redux, store, sagas...
import { BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";

const MainApp = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="app/*" element={<App/>} />
        {/* <Route path="app/*" element={<RouteService />} /> */}
        {/* <Route path="sys" element={<MenuPage />} /> */}
         {/* <Route path="/app/sys/menu" element={<MenuPage />} />  */}
      </Routes>
    </Router>
  </MuiPickersUtilsProvider>
);

// function MainApp() {
//   return (
//     <div className="App">
//       Hello world :)
//     </div>
//   );
// }


export default MainApp;


// function App() {
//   return (
//     <div className="App">
//       Hello world :)
//     </div>
//   );
// }

//export default App;
