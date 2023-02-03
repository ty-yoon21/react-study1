/**
 * Header
 */

import React from 'react';
import {Popover} from 'antd';
import Styled from './Styled';
import { Header } from 'antd/es/layout/layout';


function Hedaer({
                    size,
                    layout,
                    layoutmode,
                }) {
    
    return (
        <Styled side={layout} layoutmode={layoutmode}>

            <div>
                <ul className='user_menu>'>
                        <li style={{display: 'none'}}>
                            <a href='#none'>Q&amp;A</a>
                        </li>
                        <h2>header</h2>
                </ul>
            </div>

        </Styled>
    );
}

export default Header;