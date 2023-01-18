
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
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { Helmet} from "react-helmet";

import Styled from './Styeld';


const defaultConfig = {
    layoutMode: 'Light',
    layout: 'left',
    color: 'blue',
    sidebarBackgrouds: '#333'
};

const App = ({match, history}) => {

    const [stateConfig, setStateConfig] = useState(
        JSON.parse(window.localStorage.getItem('portal-config')) === null
        ? defaultConfig
        : JSON.parse(window.localStorage.getItem('portal-config'))
    );

    useEffect(()=> {
        window.localStorage.setItem('portal-config', JSON.stringify(stateConfig));        
    }, [stateConfig]
    );
    
    <Styled side = {stateConfig.layout} layoutMode={stateConfig.layoutMode}>

        
    </Styled>




    // return (
    // <div className="App2">
    //   Hello world container/App.js:)
    // </div>
    // );
}

export default App;