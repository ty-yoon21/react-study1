import styled from "styled-components";
import LogoDark from '../../../common/images/portal_logo_dark.png';

const Styled = styled.nav(
    ({sidebarBackgrounds, side}) => `
    position: fixed;
    top: 0;
    ${side}  : 0;
    width: 240px;
    height: 100%;
    overflow: hidden;
    z-index: 99;
    transition: all 0.3s;
    background: ${
        sidebarBackgrounds
    };   
    
    .sidebar_close {

        display: none;
        transition: all 0.3s;

        h1.small {
            width: 60px;

            a {
                width: 60px;
                padding: 0;
                background: ${
                    sidebarBackgrounds === '#f4f4f4' ? `url(${LogoDark})` : `url(${LogoDark})`
                } no-repeat center;
            }
        }z
        .user_info {
            color: ${sidebarBackgrounds === 'LightGray' ? '#000' : '#fff'};
        }
        .user_info_ellipsis {
            width: 60px;
            height: 45px;
            color #fff;
            text-align: center;
            line-height: 35px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
    }



    &.on{
        width: 60px;
        .sidebar_open {
            display: none;
        }
        .sidebar_close {
            display: block;
        }
    }

    `,
);

export default Styled;