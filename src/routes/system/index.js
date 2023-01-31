/**
 * Tables Routes
 */

import React from 'react';
import { Redirect, Route, Routes} from 'react-router-dom';

import loadable from '../../utils/loadable';

const MenuPage = loadable(() => import('./MenuPage'));

const Pages = ({match}) => {
    console.log('########################### routes/system/index');
    return (
        <div className='content-wrapper'>
            <Routes>
                {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/system`} />             */}
                {/* <Route path={`${match.url}/menu`} element={MenuPage} exact /> */}
                <Route path="menu" element={<MenuPage />} exact />
            </Routes>
        </div>
    );
};

export default Pages;