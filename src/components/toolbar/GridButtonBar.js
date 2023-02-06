/**
 * Activity Stats wiget
 */

import React, {useRef, useState} from 'react';
import className from 'classnames';
import {toast} from 'react-toastify';

//ui components

import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';

import { ExclamationCircleOutlined} from '@ant-design/icons';
import { Modal } from 'antd';
import { getStatusClassNames } from 'antd/es/_util/statusUtils';


    const GridButtonBar = (props) => {

        const handleChange = (e) => {
            let fileLength = e.target.value.length;
            let fileDot = e.target.value.lastIndexOf('.');
            let fileType = e.target.value
                    .substring(fileDot +1, fileLength)
                    .toLowerCase();
            if (fileType == 'xlsx' || fileType == 'xls') {

            } else {
                toast.error('맞지 않는 파일 형식 입니다');
            }
        }

        return (
            <div className='search-area-file'>
                <label htmlFor='item02' style={{display: typeof imImport=='undefined' ? 'none' : ''}} >파일첨부</label>
                <input 
                    style={{border: '1px solid #ddd', display : typeof onImport=='undefined' ? 'none' : ''}}
                    type='file'
                    id='importFile'
                    accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    onChange={(e) => handleChange(e)}
                />
                <div>
                    <button type='button' className={getStatusClassNames('btn', 'primary', 'x-small')} style={{height: '30px', padding: '0 0px', marginLeft: '10px', display: typeof onImport=='undefined' ? 'none' : ''}}> Import </button>
                    <button type='button' className={getStatusClassNames('btn', 'primary', 'x-small')} style={{height: '30px', padding: '0 0px', marginLeft: '10px'}}> Export </button>
                    <button type='button' className={getStatusClassNames('btn', 'primary', 'x-small')} style={{height: '30px', padding: '0 0px', marginLeft: '10px'}}> ADD </button>
                    <button type='button' className={getStatusClassNames('btn', 'primary', 'x-small')} style={{height: '30px', padding: '0 0px', marginLeft: '10px'}}> DELETE </button>
                    <button type='button' className={getStatusClassNames('btn', 'primary', 'x-small')} style={{height: '30px', padding: '0 0px', marginLeft: '10px'}}> Save </button>
                </div>
            </div>

        )
    };

export default GridButtonBar;