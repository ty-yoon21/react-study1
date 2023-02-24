
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
} from "react-router-dom";
import { Helmet} from "react-helmet";
import { ThemeProvider } from 'styled-components';



import Styled from "./Styeld";
import PcLeftMenu from "../components/molecules/PcLeftMenu";
import GlobalStyle from '../common/global-styles';
import useWindowDimensions from '../components/CustomHooks/useWindowDimensions';
import Header from '../components/molecules/Header';

//Main App
import RouteService from "../utils/RouteService";
import MenuPage from "../routes/system/MenuPage";

const defaultConfig = {
    layoutmode: 'light',
    layout: 'left',
    color: 'Blue',
    sidebarBackgrounds: '#333',
};

const App = ({match, history}) => {

    const { width } = useWindowDimensions();
    const theme = {};
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

    const onClickMenu = () => {
        setActive(!isActive);
    }

    console.log('################## App.js isActive : ', isActive);





//    console.log('############ App match.url > ', match.url)

    console.log('############## container/App.js');
    //console.log('####### container/App.js JSON.parse(window.localStorage.getItem(portal-config) : ', JSON.parse(window.localStorage.getItem('portal-config')));


    return (
    <ThemeProvider theme={theme}>
        <Styled side = {defaultConfig.layout} layoutmode={defaultConfig.layoutmode}>
            {width > 1080 ? (
                <PcLeftMenu 
                isActive={isActive}
                layout={defaultConfig.layout}
                color={defaultConfig.color}
                sidebarBackgrounds={defaultConfig.sidebarBackgrounds}
                />
            ) : (
                //mobileLeftMenu 추가예정
                <PcLeftMenu 
                isActive={isActive}
                layout={defaultConfig.layout}
                color={defaultConfig.color}
                sidebarBackgrounds={defaultConfig.sidebarBackgrounds}
                />
            )}

            

            <div className={`container ${isActive && 'on'}`}>
                <Header className='main-header'
                    size={width}
                    layout={defaultConfig.layout}
                    layoutmode={defaultConfig.layoutmode}
                />
                <div className="site-contents">
                    <Helmet>
                        <title>SK ecoplant</title>
                        <meta name='description' content='React Study' />
                    </Helmet>
                    <Routes>
                        <Route path="app/*" element={<RouteService/>} />
                    </Routes>
                    <GlobalStyle />


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
    </ThemeProvider>    
    ); 
}


    // return (
    // <div className="App2">
    //   Hello world container/App.js:)
    // </div>
    // );




export default App;