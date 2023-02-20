import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Wijmo
import * as wjFlexGrid from '@grapecity/wijmo.react.grid';
import {
    FlexGrid,
    FlexGridColumn,
    FlexGridCellTemplate
  } from "@grapecity/wijmo.react.grid";
import { getData } from "./data";


import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjcCore from '@grapecity/wijmo';
import * as wjGridFilter from '@grapecity/wijmo.react.grid.filter';
import * as wjGroupPanel from '@grapecity/wijmo.react.grid.grouppanel';
import { Selector, BooleanChecker } from '@grapecity/wijmo.grid.selector';
import '@grapecity/wijmo.touch'; // add touch support on mobile devices
import { InputDate, InputTime, ComboBox, AutoComplete, InputColor, InputNumber } from '@grapecity/wijmo.input';

// UI Compnent
import MainTitle from '../../../components/MainTitle';
import SearchForm from '../../../components/toolbar/SearchForm';
import GridButtonBar from '../../../components/toolbar/GridButtonBar';


import {
    getTsysMenuList,
 } from '../../../actions';


const MenuPage = (props) => {

    const dispatch = useDispatch();
    const theGrid = useRef();
    const groupPanelRef = useRef();
    //const menuList = useSelector((state) => state.tsysMenuReducer.grid.data);
    const menuList = useSelector((state) => state);

    //Binding Grid Data
    const { view } = useSelector((state) => ({
            view: new wjcCore.CollectionView(state.tsysMenuReducer.grid.data),
        })
    );

    //Initial Grid
    const initGrid = (flex) => {
        //dispatch(getTsysCodeList({ systemCd: "100000"}));
        console.log('###################initGrid - dispatch(getTsysMenuList)');
        dispatch(getTsysMenuList({}));
        //groupPanelRef.current.control.grid = flex;
        // groupPanelRef.current.control.grid = flex;
        // console.log('########################### flex : ', flex);
        // console.log('####### view : '+ view.items.length);
        // console.log('############## menuList : ',menuList); 
    

        //custom rendering for headers and "Diff" columns
        flex.formatItem.addHandler((s,e) => {
            if(e.panel === s.columnHeaders) {
                console.log('e.panel == s.columnHeaders');
                e.cell.innerHTML =
                    '<div class="v-center">' + e.cell.innerHTML + '</div>';
            }
            // console.log('################ e');
            // console.log('################ s');
            // console.log('################ e.cell.innerHTML : ', e.cell.innerHTML);
            // console.log('################ custom rendering');
            // console.log('################ e.panel : ', e.panel);
            // console.log('################ s.cells', s.cells);
            // console.log('################ s.columnHeaders', s.columnHeaders);
            //custom rendering for "Diff" columns
            if (e.panel == s.cells){
                let col = s.columns[e.col];
                console.log('################ custom rendering2');
                if(
                    e.row >= 0 &&
                    (
                        col.binding == "systemCd" ||
                        col.binding == "menuCd" || 
                        col.binding == "name"
                    )
                ) {
                    e.cell.style.backgroudColor = "#effad6";
                }
            }
            console.log('################ custom rendering3');
            console.log('############## menuList333 : ',menuList);
            console.log('############## view333 : ',view);
        });
    };

    const onLoadMenu = () => {
        console.log('################ onLoadMenu');
        console.log('############## onLoadMenu menulist : ',menuList);
        console.log('############## onLoadMenu view : ',view);
    }

    return (
        <div id='main'>
                <div className='main_title'>
                    <MainTitle title='시스템 메뉴코드!!'/>
                </div>
                <div className='main_wrap'>
                    <div className='search-area responsive row-flex-end'>
                        <ul>
                            <li className='search-area-condition item1'>
                                <SearchForm onSearch={getTsysMenuList} />
                                <button onClick={onLoadMenu}>메뉴 불러오기</button>
                            </li>
                            <li className='search-area-condition item2'>
                                <GridButtonBar />
                            </li>
                        </ul>                        
                    </div>

                    <div style={{display: "block"}}>

                    <wjFlexGrid.FlexGrid
                            ref={theGrid}
                            itemsSource={view}
                            selectionMode="Row"
                            deferResizing={true}
                            showMarquee={true}
                            alternatingRowStep={0}
                            allowAddNew={true}
                            allowDelete={true}
                            newRowAtTop={true}
                            initialized={(s) => initGrid(s)}
                            columns={[
                                { binding: 'systemCd', header: 'systemCd' },
                                { binding: 'prntCd', header: 'prntCd' },
                                { binding: 'menuCd', header: 'menuCd' },
                                { binding: 'name', header: 'name' }
                            ]}
                    />
                        <h2>hi2</h2>
                    </div>
                </div>
        </div>
    );
};

export default MenuPage;