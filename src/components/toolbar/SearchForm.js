/**
 * Activity Stats Wiget
 */

import React from 'react';
import className from 'classnames';


const SerachForm = (props) => {

    const {compMap, systemMap, handleOnSearch} = props;

    //조회연월
    const now = new Date();
    const [textYear, setTextYear] = React.useState('');
    const [textMonth, setTextMonth] = React.useState('');
    const [textKeyword, setTextKeyword] = React.useState('');
    const [txtCompCd, setTxtCompCd] = React.useState('');
    const [txtSystemCd, setTxtSystemCd] = React.useState('');

    let years = [{name: 'ALL', value: ''}];
    for (let y = now.getFullYear(); y >= 2020; y -=1) {
        years.push({name: y.toString(), value: y.toString()});
    }

    let month = [{name: 'ALL', value: '' }];
    for (let m=1 ; m <= 12 ; m+=1) {
        month.push({name: m.toString(), value: m.toString()});
    }

    const onSearchBtnClick = () => {

    };



    return (
        <ul>
        <li className='search-area-condition item2'>
            <label htmlFor='item02'>조회연월</label>
            <select
                value={textYear}
                onChange={(e) => setTextYear(e.target.value)}
                className='w100 rounded'
            >
                {years.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>

            <select
                value={textMonth}
                onChange={(e) => setTextMonth(e.target.value)}
                className='w80 rounded'
            >
                {month.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>

            <label htmlFor='item01'>검색어</label>
            <input 
                type='text'
                id='item01'
                className='border'
                onChange={(e) => setTextKeyword(e.target.value)}
            />
            
            <button
                type='button'
                className={className('btn', 'primary', 'x-small')}
                onClick={onSearchBtnClick}
                style={{height: '30px', marginLeft: '10px'}}
            
            >
                조회
            </button>
            
        </li>
        </ul>   

    )
};

export default SerachForm;