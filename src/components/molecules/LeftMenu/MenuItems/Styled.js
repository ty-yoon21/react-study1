import styled from 'styled-components';
import { Menu } from 'antd';



const Styled = styled(Menu) (
    ({color, sidebarBackgrounds}) => `
    background: transparent;
    border: 0;
    
    .ant-menu-vertical .ant-menu-item:after,
    .ant-menu-vertical-left .ant-menu-item:after,
    .ant-menu-vertical-right .ant-menu-item::after,
    .ant-menu-inline, .ant-menu-item::after {
        border-right: 0;
    }

    span.ant-menu-item-icon {
        width: 20px;
        height: 20px;
    }
    
    .ant-menu-submenu {
        color: ${sidebarBackgrounds === '#f4f4f4' ? '#000' : '#fff'}
        font-size: 16px;

        .ant-menu-submenu-title {
            position: relative;
            margin 0
            height: 44px;
            line-height: 44px;
            padding: 0 10px 0 20px !important;
            
            .ant-menu-submenu-arrow {
                color: #bbb;
            }
        }

        span.icon1 {
            background: #f4f4f4;
        }

        &:hover,
        &.ant-menu-submenu-open {
            .ant-menu-submenu-title {                
                background-color: ${color === 'Blue' ? '#399efa' : '#00c8aa'};
                color: #fff;
            }

            .antmenu-submenu-arrow {
                color: #fff;
            }
            
        }

        .ant-menu-sub {
            background-color: #0f151b;
            padding: 10px 0;
            
            .ant-menu-item {
                margin: 0;
                font-size: 14px;
                color: #fff;
                height: 30px;
                line-height: 30px;

                &:hover,
                &.ant-menu-item-selected,
                &.ant-menu-item-active {
                    background-color: transparent;
                    color: ${color === 'Blue' ? '#399efa' : '#00c8aa'};
                }

                .ant-menu-title-content {
                    position: relative;
                    padding-left: 8px;
                    
                    &::before {
                        content: '-';
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                }
            }
        }
    }
`
);

export default Styled;