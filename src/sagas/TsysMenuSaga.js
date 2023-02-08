/**
 * Todo Sagas
 */

import {all, call, fork, put, takeEvery, throttle} from 'redux-saga/effects';

//api
import api from '../api';

import {
    TSYS_MENU_ON_GET_LIST,
    TSYS_MENU_ON_SAVE,
    TSYS_MENU_ON_IMPT,
    TSYS_MENU_ON_SEND,
    TSYS_MENU_GET_LIST
} from '../actions/types';

import {
    getTsysMenusListSuccess,
    getTsysMenusListFailure,
    getTsysMenuListSuccess,
    getTsysMenuListFailure,
    saveTsysMenuSuccess,
    saveTsysMenuFailure,
    sendTsysMenuSuccess,
    sendTsysMenuFailure,

} from '../actions';

import {message} from 'antd';

/**
 * Get & Send Menus List From Server
 */
function* getMenusListFromServer() {
    try {
        const response = yield call (getMenusListRequest);
        if(response.data.statusCode ===0) yield put(getTsysMenusListSuccess(response));
    } catch (error) {
        message.error('SERVER ERROR') 
    }
}

const getMenusListRequest = async (request) => {

    await api({
        method: 'post',
        url: '/api/sys/menu/getSystemMenuList',
        data: JSON.stringify(request.payload),
        // headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}`, 'Content-Type': 'application/json'},
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });
};



/**
 * Get & Send Menu List From Server
 */
 function* getListFromServer(action) {
    try {
        const response = yield call(getListRequest, action);
        yield put(getTsysMenuListSuccess(response));
    }catch(error) {
        yield put(getTsysMenuListFailure(error));
    }
}

const getListRequest = async (request) =>
    await api( {
        method: 'post',
        url: '/api/sys/menu/list',
        data: JSON.stringify(request.payload),
        //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}` 'Content-Type': 'application/json'},
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    });





/**
 * Get List, save, import, send
 */
 export function* getTsysMenusList() {
    yield takeEvery(TSYS_MENU_GET_LIST, getMenusListFromServer);
}
export function* getTsysMenuList() {
    yield takeEvery(TSYS_MENU_ON_GET_LIST, getListFromServer);
}


/**
 * Root Saga
*/
//루트 사가를 만들어주겠습니다. 프로젝트에서 여러개의 사가를 만들게 될텐데, 이를 모두 합쳐서 루트 사가를 만듭니다.
export default function* rootSaga() {
yield all( [
    fork(getTsysMenuList),
])
}