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
//Menu Code menu
function* getMenusListFromServer() {
    try {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - getMenusListFromServer (main menu)');
        const response = yield call (getMenusListRequest);
        //yield put(getTsysMenusListSuccess(response));
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - getMenusListFromServer (main menu2)');
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - getMenusListFromServer - response.data.statusCode : ',response);
        if(response.data.statusCode ===0) yield put(getTsysMenusListSuccess(response));
    } catch (error) {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - getMenusListFromServer error - response :',error);
        message.error('SERVER ERROR : ',error) 
    }
}

// Main menu
const getMenusListRequest = async () => {
    console.log('#######getMenusListRequest');
    await api({
        method: 'post',
        url: '/api/sys/menu/getSystemMenuList',
        headers: {'Content-Type': 'application/json'},
        // headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}`, 'Content-Type': 'application/json'},
    }).then((response) => {
        console.log('#######getMenusListRequest Response Success - response : ',response);
        return response;
    }).catch((error) => {
        console.log('#######getMenusListRequest Error : ', error);
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
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - response : ',response.data);
    }catch(error) {
        yield put(getTsysMenuListFailure(error));
    }
}

const getListRequest = async (request) =>
    await api( {
        method: 'post',
        url: '/api/sys/menu/list',
        data: JSON.stringify(request.payload),
        headers: {'Content-Type': 'application/json'},
        //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}` 'Content-Type': 'application/json'},
        
    }).then((response) => {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - 메뉴페이지 - getListRequest : ',response);
        return response;
    }).catch((error) => {
        return error;
    });

// save - post to server
function* postListToServer(action) {
    try {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - postListToServer - response.data : gogo');
        const response = yield call(postListRequest, action);
        
        yield put(saveTsysMenuSuccess(response));
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysmenuSaga - postListToServer - response.data : ',response.data);
    } catch (error) {
        yield put(saveTsysMenuFailure(error));
    }
}

const postListRequest = async (request) => {
    await api({
        method: "post",
        url: "/api/sys/menu/save",
        data: JSON.stringify(request.payload),
        headers: {'Content-Type': 'application/json'},
        // headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}`, 'Content-Type': 'application/json'},

        }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}



/**
 * Get List, save, import, send
 */
 export function* getTsysMenusList() {
    console.log('### saga - getTsysMenuSSS');
    yield takeEvery(TSYS_MENU_GET_LIST, getMenusListFromServer);
}
// 시스템 메뉴코드 화면에서 호출
export function* getTsysMenuList() {
    console.log('### saga - getTsysMenuList');
    yield takeEvery(TSYS_MENU_ON_GET_LIST, getListFromServer);
}
export function* saveTsysMenu() {
    console.log('### saga - saveTsysMenu');
    yield takeEvery(TSYS_MENU_ON_SAVE, postListToServer);
    //yield throttle(1000, TSYS_MENU_ON_SAVE, postListToServer);
}


/**
 * Root Saga
*/
//루트 사가를 만들어주겠습니다. 프로젝트에서 여러개의 사가를 만들게 될텐데, 이를 모두 합쳐서 루트 사가를 만듭니다.
export default function* rootSaga() {
yield all( [
    fork(getTsysMenuList),
    fork(saveTsysMenu),
    fork(getTsysMenusList)
])
}