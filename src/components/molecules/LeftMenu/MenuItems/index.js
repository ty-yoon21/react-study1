import React, {useCallback, useEffect, useState} from 'react';

import {useParams, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getTreeData} from '../../../../utils/tree';
//import classNames from 'classnames';
import Styled from './Styled';
import { MenuList } from '@material-ui/core';
//import StyleDevops from './StyledDevops';
//import StyledSvc from './StyledSvc';
//import {getTsysMenusList} from '../../../../actions';

function getItem(label, key, path, icon, children, type, color) {
    return {
        key,
        path,
        icon,
        children,
        label,
        type,
        color,
    }
}

const items = [
    getItem('시스템관리', 'sub1', '', <span className='icon1'/>, [
        getItem('시스템 메뉴코드 (O)', 'sub1-1', '/app/sys/menu'),
        getItem('시스템 목록', 'sub1-2', '/app/sys/system'),
        getItem('시스템 공통코드', 'sub1-3', '/app/sys/code'),
        getItem('시스템 권한그룹', 'sub1-4', '/app/sys/auth'),
        getItem('시스템 메뉴별 권한그룹', 'sub1-5', '/app/sys/menuauth'),
        getItem('시스템 사용자 관리', 'sub1-6', '/app/sys/sysuser'),
    ]),
    getItem('메뉴A', 'sub2', '', <span className='icon1'/>, [
        getItem('1', 'sub2-1', 'app/menua/1'),
        ]
    ),
];

const rootSubmenuKeys = ['sub1', 'sub2'];

const MenuItems = ({color, sidebarBackgrounds}) => {

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [menuState, setMenuState] = useState([]);

    const [openKeys, setOpenKeys] = useState([]);    
    const [menus, setMenus] = useState([]);
    const [menuItems, setMenuItmems] = useState([]);



    const setSelectedMenuItem = (e) => {
        console.log('MenuItems e : ',e)
        if(!e.item.props.path.includes('http')){            
            navigate(e.item.props.path);
        }else{
            window.open(e.item.props.path, '_blank', 'noopener,noreferrer');
        }
    }

    console.log('memustate >>> ', menuState);
    console.log('color > ', {color});



    const setToItems = () => {
        MenuList.filter(f => f.lvl===1).map(l => setMenuState((prevState) => [...prevState, getItem(l.name, l.menuCd, l.menuPath,
            <span className={l.icon}/>, getChildren(l.menuCd))]
            )
            )
    }

    const getChildren = (menuCd) => {
        return MenuList.filter( f=> f.lvl ===2 && menuCd === f.prntCd).map(l=> getItem(l.name, l.menuCd, l.menuPath))
    }

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);

        if(rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    function setChildren(items, rootId) {
        if(!items[rootId].hasChildren) {
            return null;
        }
        const result = [];
        items[rootId].children.forEach(menuId => {
            const item = items[menuId];
            const menuItem = getItem(
                item.data.NAME_KOR,
                item.id,
                item.hasChildren ? (
                    <span />                    
                ) : null,
                setChildren(items, menuId),
            );                
            result.push(menuItem);
        });        
        return result;
    }

    //const auth = userSelector (state => state.auth);
    const commonMenuTree = {};

    useEffect(() => {
        const treeData = getTreeData(
            commonMenuTree,
            -1,
            'TR_PRNT_KEY',
            'TR_KEY',
            'IS_FOLDER',
            'CATEGORY_NAME',
        );
        const {rootId, items} = treeData;
        setMenuItmems(items);

        if( rootId && items) {
            const menusTmp = setChildren(items, rootId);
            const menu = menusTmp ? menusTmp.filter(i => i.children) : [];
            setMenus(menu);
        }


    }, [commonMenuTree]
    );



    return (
        <div>
        <Styled 
            color={color}
            sidebarbackgrounds={sidebarBackgrounds}
            mode='inline'
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            onClick={setSelectedMenuItem}
            //onClick={e => setSelectedMenuItem(e.key)}
        />
        </div>
    )

};

export default MenuItems;