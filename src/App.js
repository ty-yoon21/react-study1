// React
import React from "react";
import './App.css';
import App from "./container/App";

//UI
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

//Router, redux, store, sagas...
import { BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import RootSaga from './sagas';
import { configureStore } from './store';


const store = configureStore(window.__INITIAL_STATE__);   //Create Store
store.runSaga(RootSaga);                                  //Run Root Saga, // 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.


const MainApp = () => (
  <Provider store={store}>
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
