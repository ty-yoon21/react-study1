
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
import PcLeftMenu from "../components/molecules/PcLeftMenu";
import GlobalStyle from '../common/global-styles';



const defaultConfig = {
    layoutMode: 'Light',
    layout: 'left',
    color: 'Blue',
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

    
    return (    
    <Styled side = {stateConfig.layout} layoutMode={stateConfig.layoutMode}>
        <PcLeftMenu 
            isActive={isActive}
            layout={stateConfig.layout}
            color={stateConfig.color}
            sidebarBackgrounds={defaultConfig.sidebarBackgrounds}
        />
        <GlobalStyle />
    </Styled>
    ); 



    // return (
    // <div className="App2">
    //   Hello world container/App.js:)
    // </div>
    // );
}

export default App;