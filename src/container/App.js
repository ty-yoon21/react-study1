
/**
 * App.js
 * 
 * This component is the skeleton aroud the actual pages
 * and you shoud contain code that should be seen on all pages. (Ex. navigatioin bar)
 * 
 */

 
// React
import React, { useState, useEffect, Suspense, lazy, Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { Helmet} from "react-helmet";




import Styled from "./Styeld";
import PcLeftMenu from "../components/molecules/PcLeftMenu";
import GlobalStyle from '../common/global-styles';

//Main App
import RouteService from "../utils/RouteService";
import MenuPage from "../routes/system/MenuPage";

const defaultConfig = {
    layoutMode: 'light',
    layout: 'left',
    color: 'blue',
    sidebarBackgrounds: '#333',
};

const App = ({match, history}) => {
    const [ isActive, setActive] = useState(false);

    const [stateConfig, setStateConfig] = useState(
        JSON.parse(window.localStorage.getItem('portal-config')) === null
        ? defaultConfig
        : JSON.parse(window.localStorage.getItem('portal-config'))
    );

    useEffect(()=> {
        window.localStorage.setItem('portal-config', JSON.stringify(stateConfig));        
    }, [stateConfig]
    );

//    console.log('############ App match.url > ', match.url)

    console.log('############## container/App.js');
    return (    
    <Styled side = {stateConfig.layout} layoutMode={stateConfig.layoutMode}>
        <PcLeftMenu 
            isActive={isActive}
            layout={stateConfig.layout}
            color={stateConfig.color}
            sidebarBackgrounds={defaultConfig.sidebarBackgrounds}
        />
        <GlobalStyle />

        <div className={`container ${isActive && "on"}`}>

            <div className="site-contents">
                {/* <Routes>
                    <Route path="app/*" element={<RouteService />} /> 
                        <Route 
                        //path={`${match.url}app`} //react-router-dom v5
                        path="/app/sys/menu"
                        element={() => <RouteService />}
                        /> 
                </Routes> */}
            </div>

        </div>
    </Styled>
    ); 



    // return (
    // <div className="App2">
    //   Hello world container/App.js:)
    // </div>
    // );
}

export default App;