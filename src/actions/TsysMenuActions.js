/**
 * Todo App Actions
 */

import {
TSYS_MENU_ON_GET_LIST,    
TSYS_MENU_ON_GET_LIST_SUCCESS,
TSYS_MENU_ON_GET_LIST_FAILURE,
TSYS_MENU_ON_SAVE,
TSYS_MENU_ON_SAVE_SUCCESS,
TSYS_MENU_ON_SAVE_FAILURE,
TSYS_MENU_ON_SEND,
TSYS_MENU_ON_SEND_SUCCESS,
TSYS_MENU_ON_SEND_FAILURE,
TSYS_MENU_GET_LIST,
TSYS_MENU_GET_LIST_SUCCESS,
TSYS_MENU_GET_LIST_FAILURE
} from './types';


/**
 * Redux Action Get Menu From Main MENU - Get, Success, Failure
 */
export const getTsysMenusList = () => ({
    type: TSYS_MENU_GET_LIST
});

export const getTsysMenusListSuccess = (response) => ({
    type: TSYS_MENU_GET_LIST_SUCCESS,
    payload: response.data
});

export const getTsysMenusListFailure = (error) => ({
    type: TSYS_MENU_GET_LIST_FAILURE,
    payload: error
});

/**
 * Redux Action Get, Success, Failure
 */
export const getTsysMenuList = (payload) => ({
    type: TSYS_MENU_ON_GET_LIST,
    payload : payload
});

export const getTsysMenuListSuccess = (response) => ({
    type: TSYS_MENU_ON_GET_LIST_SUCCESS,
    payload : response.data
    
});

 export const getTsysMenuListFailure = (error) => ({
    type: TSYS_MENU_ON_GET_LIST_FAILURE,
    payload : error
});


/**
 * Redux Action Save, Success, Failure
 */
export const saveTsysMenu = (payload) => ({
    type: TSYS_MENU_ON_SAVE,
    payload: payload
});

export const saveTsysMenuSuccess = (response) => ({
    type: TSYS_MENU_ON_SAVE_SUCCESS,
    payload: response
});

export const saveTsysMenuFailure = (error) => ({
    type: TSYS_MENU_ON_SAVE_FAILURE,
    payload: error
});