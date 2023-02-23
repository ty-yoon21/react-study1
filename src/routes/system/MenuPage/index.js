import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';



// Wijmo
import * as wjFlexGrid from '@grapecity/wijmo.react.grid';
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


// Redux Action
import {
    getTsysMenuList,
    saveTsysMenu
 } from '../../../actions';


const MenuPage = (props) => {

    const dispatch = useDispatch();
    const theGrid = useRef();
    const groupPanelRef = useRef();

    // // validating Grid Data
    const validGrid = (item, propName) => {
        
        switch (propName) {
            case "systemCd":
                //console.log('########### item.systemCd : ',item.systemCd);
                return item.systemCd == null || item.systemCd == "" ? "Invalid" : "";
            case "name":
                return item.name == null || item.name == "" ? "Invalid" : "";
            case "description":
                return item.description == null || item.description == "" ? "Inavlid" : "";
            case "menuCd":
                return item.menuCd == null || item.menuCd == "" ? "Invalid" : "";
            case null:
                let errors = [];
                for (let key in item) {
                    let err = validGrid(item, key);
                    if (err) {
                        errors.push(err);
                    }
                }
                return errors.length > 1
                    ? "this item has " + errors.length + " errors"
                    : errors.length == 1
                    ? errors[0]
                    : null;
            default:
                return null;
        }
    };


    //Binding Grid Data
    const { view, loading } = useSelector((state) => ({
        
        view: new wjcCore.CollectionView(state.tsysMenuReducer.grid.data, {
            trackChanges: true,
            getError: validGrid,
        }),
        loading: state.tsysMenuReducer.loading,
    })
    );


    //Initial Grid
    const initGrid = (flex) => {
        //dispatch(getTsysCodeList({ systemCd: "100000"}));
        //console.log('###################dispatch(getTsysMenuList)');
        console.log('##################dispatch');
        dispatch(getTsysMenuList({}));
        groupPanelRef.current.control.grid = flex;
        let selector = new Selector(flex, {
            itemChecked: (s, e) => {
                console.log(flex.rows.filter((r) => r.isSelcted));
            },
        });

        //custom rendering for headers and "Diff" columns
        flex.formatItem.addHandler((s,e) => {

            if(e.panel === s.columnHeaders) {
                //console.log('e.panel == s.columnHeaders');
                e.cell.innerHTML =
                    '<div class="v-center">' + e.cell.innerHTML + '</div>';
            }
            //custom rendering for "Diff" columns
            if (e.panel == s.cells){
                let col = s.columns[e.col];
                //console.log('################ custom rendering2');
                //console.log('################ col.binding : ', col.binding);
                //console.log('################ e.panel : ', e.panel);
                //console.log('################ s.cells : ', s.cells);
                //console.log('################ col : ', col);
                if(
                    e.row >= 0 &&
                    (
                        col.binding == "systemCd" ||
                        col.binding == "menuCd" || 
                        col.binding == "name" ||
                        col.binding == "nameEng" ||
                        col.binding == "nameEtc" ||
                        col.binding == "prntCd" ||
                        col.binding == "menuType" ||
                        col.binding == "menuPath" ||
                        col.binding == "sortSq" ||
                        col.binding == "pcYn" ||
                        col.binding == "mobileYn" ||
                        col.binding == "useYn" ||
                        col.binding == "icon" ||
                        col.binding == "filePath"
                    )
                ) {
                    //console.log('################ custom backgroudColor');
                    e.cell.style.backgroundColor = "#effad6";
                }
            }
            //console.log('################ custom rendering3');
        });
    };

    //system code
    // const { systemCdMap } = useSelector((state) => ({
    //     systemCdMap: state.tsysSystemReducer.grid.data,
    // }))


    const getUseMap = () => {
        return [
            { codeCd: "Y", name: "Y"},
            { codeCd: "N", name: "N"},
        ];
    };



    return (
        <div id='main'>
                <div className='main_title'>
                    <MainTitle path='시스템관리' title='시스템 메뉴코드!!'/>
                </div>
                <div className='main_wrap'>
                    <div className='search-area responsive row-flex-end'>
                        <ul>
                            <li className='search-area-condition item1'>
                                <SearchForm />
                            </li>
                            <li className='search-area-condition item2'>
                                <GridButtonBar 
                                    flex={theGrid}
                                    valid={validGrid}
                                    onSave={saveTsysMenu}
                                />
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
                        >
                             
                            <wjGridFilter.FlexGridFilter />
                            <wjGroupPanel.GroupPanel
                                ref={groupPanelRef}
                                placeholder="Drag Columns here to create groups."
                            />

                            {/* <wjFlexGrid.FlexGridColumn 
                                header="시스템코드"
                                binding="systemCd"
                                width="1*"
                                isRequired={true}
                            />
                            <wjFlexGrid.FlexGridColumn 
                                header="시스템명"
                                binding="systemName"
                                width="1*"
                                isRequired={true}
                            />
                            <wjFlexGrid.FlexGridColumn 
                                header="상위코드"
                                binding="prntCd"
                                width="1*"
                                isRequired={true}
                            />
                            <wjFlexGrid.FlexGridColumn 
                                header="코드"
                                binding="menuCd"
                                width="1*"
                                isRequired={true}
                            />
                            <wjFlexGrid.FlexGridColumn 
                                header="코드명"
                                binding="name"
                                width="2*"
                                isRequired={true}
                            />
                            <wjFlexGrid.FlexGridColumn 
                                header="메뉴 경로"
                                binding="menuPath"
                                width="1*"
                                isRequired={false}
                            /> */}
                        
                        </wjFlexGrid.FlexGrid>
                    </div>
                </div>
        </div>
    );
};

export default MenuPage;