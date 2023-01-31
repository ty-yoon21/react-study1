/**
 * App Routes
 */

 import React, { Component } from 'react';
 import {Routes, Route} from 'react-router-dom';
 
 import routerService from '../services/_routerService';
 import Pages from '../routes/system';
 
 const RouterService = () => {
    //const { match } = this.props;
    console.log('########################### RouterService');
    return (
            <div>
                <Routes>
                    {routerService && routerService.map((route, key) => 
                        <Route key={key} path="sys/*" element={<route.element />} />
                    )}



                    {/* <Route path="sys/*" element={<Pages />} /> */}
                {/* {routerService && routerService.map((route, key)=>
                   <Route key={key} path="sys/*" element={route.element} />
                )} */}
                </Routes>
            </div>
    );
 };
 
 export default RouterService;