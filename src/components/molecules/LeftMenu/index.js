import React from 'react';

import moment from 'moment';
import {link, NavLink} from "react-router-dom";

import Styled from './Styled';
import MenuItems from './MenuItems';

export default function LeftMenu({color, sidebarBackgrounds}) {
    //const {user} = JSON.parse(window.localStorage.getItem("User"))
    let navCss = 'portal';
    console.log('components/molecules/LeftMenu sidebarbackgrouds : ',sidebarBackgrounds);
    return (
        <Styled
            className={navCss}
            color={color}
            sidebarBackgrounds={sidebarBackgrounds}
        >
            <div className='sidebar_open'>
                <h1>                    
                    <NavLink to="/">React Portal!!</NavLink>                    
                </h1>
            
                <div className='user_info'>
                    <div className = 'user_sub'>                   
                        관리자
                        <span className='user_id'>
                            (admin)
                        </span>                                   
                    </div>

                    <p className = 'mail'>
                        <span>E.</span>
                        admin@react.com
                    </p>
                    <ul className = 'login_data'>
                        <li>
                            <span>최종로그인</span>
                            <span className='Text_division'>|</span>
                            <span>
                                2023.01.27 00:09                            
                            </span>
                        </li>
                    </ul>
                </div>

                <MenuItems
                    navCss={navCss}
                    color={color}
                    sidebarBackgrounds={sidebarBackgrounds}
                />

                
            </div>

        </Styled>

    );
}






