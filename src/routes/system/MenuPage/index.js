import React, {useRef} from 'react';



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

const MenuPage = (props) => {

    const theGrid = useRef();

    return (
        <div id='main'>
                <div className='main_title'>
                    <MainTitle title='시스템 메뉴코드!!'/>
                </div>
                <div className='main_wrap'>
                    <div className='search-area responsive row-flex-end'>
                        <ul>
                            <li className='search-area-condition item1'>
                                <SearchForm />
                            </li>
                            <li className='search-area-condition item2'>
                                <GridButtonBar />
                            </li>
                        </ul>                        
                    </div>




                </div>
        </div>
    );
};

export default MenuPage;