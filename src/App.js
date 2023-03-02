// React
import React from "react";
import './App.css';
import App from "./container/App";
import LoginPage from "./routes/LoginPage";

//UI
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

//Router, redux, store, sagas...
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import RootSaga from './sagas';
import { configureStore } from './store';

//Create Store & Run Root Saga
const store = configureStore(window.__INITIAL_STATE__);   
store.runSaga(RootSaga);                                  // Note: You must run the above code after the store has been created.


const MainApp = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/*" element={<App/>} />
          {/* <Route path="app/*" element={<App/>} /> */}
          {/* <Route path="app/*" element={<RouteService />} /> */}
          {/* <Route path="sys" element={<MenuPage />} /> */}
          {/* <Route path="/app/sys/menu" element={<MenuPage />} />  */}
        </Routes>
      </Router>
    </MuiPickersUtilsProvider>
  </Provider>
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
