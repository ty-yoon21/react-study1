import styled from 'styled-components';

import LogoDark from '../../../common/images/portal_logo_dark.png';


const Styled = styled.div(
    ({color, sidebarBackgrounds}) => `
   
    height: 100%;

    h1 {
        height: 60px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        width: 240px;
        position: relative;

        a {
            width: 173px;
            height: 60px;
            display: block;
            background: ${
                sidebarBackgrounds === '#f4f4f4' ? `url(${LogoDark})` : `url(${LogoDark})`
            } no-repeat center;
            text-indent: -9999px;
            margin: 0 auto;
            
        }
    }


    .sidebar_open {
        display: block;
        transition: all 0.3s;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        
        
        
        background-position-y: 99%;

    }

    .sidebar_open::-webkit-scrollbar{
        width: 0px;
    }

    .user_info {
        border-bottom: 1px solid;
        colorL: ${sidebarBackgrounds === '#f4f4f4' ? '#000' : '#fff'};
        border-color: rgba(255, 255, 255, 0.2);
        padding: 19.2px 10px;
        width: 240px

        .user_sub {
            display: flex;
            justify-content: spcae-between;
            width: 220px;
            
            .user_name {
                font-size: 16px;
                font-weight: 500;
                color: ${sidebarBackgrounds === '#f4f4f4' ? '#000' : '#fff'};
                h2 {
                    font-size: 16px;
                }
                .user_id {
                    display: inline-block;
                    max-width: 210px;
                    overflow: hidden;
                    text-overflow: eclipsis;
                    white-space: nowrap;
                    vertical-align: bottom;
                }
            }
        }

        p {
            margin-top: 8px;
            font-size: 14px;
            text-align: left;
            font-family: 'roboto';

            span {
                color: #00c8aa;                
            }
            
            &.mail {
                margin-top: 0;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 215px;
                paddig-right: 2px;

                span {
                    margin-right: 9px;
                }
            }
        }

        .login_data {
            display: block;
            backgroud-color: #12181f;
            border-radius: 5px;
            font-size: 12px;
            text-align: left;
            
            height: 22px;
            margin-top: 12px;
            margin-bottom: 0px;

            padding-top: 7px;
            padding-right: 0px;                       
            padding-bottom: 0px;
            padding-left: 16px; 
            

            li {
                &::before {
                    content: '.';
                    width: 2px;
                    height: 2px;
                    margin-right: 5px;
                    position: relative;
                    top: -4px;
                    padding-bottom: 0px
                }

                span {
                    &:nth-child(1) {
                        display: inline-block;
                        width: 75px;
                    }

                    &.text_division {
                        margin-right: 10px
                        color: rgba(255, 255, 255, 0.2);
                        position: relative;
                        top: -2px;
                    }
                }
            }
        }   
    }

    &.portal {
        background: ${sidebarBackgrounds};
        height: 100%;

        .sidebar_open {
            
            background-position-y: 99%;
        }
        .user_info{
            color: ${sidebarBackgrounds === '#f4f4f4' ? '#000' : '#fff'};            
        }
        .user_info p span {
            color: ${color === 'Blue' ? '#399EFA' : '#009804'};
        }
        .user_info .login_data {
            background: ${
                sidebarBackgrounds = '#333' ? '#151515' : 'rgba(0,0,0,.1)'
            };            
        }
        .ant-menu-submenu{
            color: ${sidebarBackgrounds === '#f4f4f4' ? '#000' : '#fff'}
        }
    }    
`,
);

export default Styled;