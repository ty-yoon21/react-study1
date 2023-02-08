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
 * Redux Action Get
 */
export const getTsysMenuList = (payload) => ({
    type: TSYS_MENU_ON_GET_LIST,
    payload : payload
});

/**
 * Redux Action Get Success
 */
export const getTsysMenuListSuccess = (response) => ({
    type: TSYS_MENU_ON_GET_LIST_SUCCESS,
    payload : response.data
});

/**
 * Redux Action Get
 */
 export const getTsysMenuListFailure = (error) => ({
    type: TSYS_MENU_ON_GET_LIST_FAILURE,
    payload : error
});