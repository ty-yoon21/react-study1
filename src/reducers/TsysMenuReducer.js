import { toast, ToastContainer } from 'react-toastify';

// action types
import {
    TSYS_MENU_GET_LIST,
    TSYS_MENU_GET_LIST_SUCCESS,
    TSYS_MENU_GET_LIST_FAILURE,
    TSYS_MENU_ON_GET_LIST,
    TSYS_MENU_ON_GET_LIST_SUCCESS,
    TSYS_MENU_ON_GET_LIST_FAILURE,
    TSYS_MENU_ON_SAVE,
    TSYS_MENU_ON_SAVE_SUCCESS,
    TSYS_MENU_ON_SAVE_FAILURE,
    TSYS_MENU_ON_SEND,
    TSYS_MENU_ON_SEND_SUCCESS,
    TSYS_MENU_ON_SEND_FAILURE,
} from '../actions/types';

const INIT_STATE = {
    loading: false,
    statusCode: 0,
    errormsg: "",
    grid: {
        data: [],
        newRowAtTop: false,
        instance: null,
    },
    items: [],
    menuList: [],
};

const TsysMenuReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TSYS_MENU_GET_LIST: { return { ...state, loading: true, menuList: []};}
        case TSYS_MENU_GET_LIST_SUCCESS: { return { ...state, loading: false, menuList: action.payload.body};}
        case TSYS_MENU_GET_LIST_FAILURE: { return { ...state, loading: false};}
        case TSYS_MENU_ON_GET_LIST: { return { ...state, loading: true, menuList: []};}
        case TSYS_MENU_ON_GET_LIST_SUCCESS: { 
            console.log('##### TsysMenuReducer - action.payload.body : ', action.payload.body);
            return { ...state, loading: false, grid: {data: action.payload.body}};}
            //return { ...state, loading: false, menuList: action.payload.body};}
        case TSYS_MENU_ON_GET_LIST_FAILURE: { return { ...state, loading: false};}
        case TSYS_MENU_ON_SAVE: { return { ...state, loading: true};}
        case TSYS_MENU_ON_SAVE_SUCCESS: { return { ...state, loading: false};}
        case TSYS_MENU_ON_SAVE_FAILURE: { return { ...state, loading: false};}
        case TSYS_MENU_ON_SEND: { return { ...state, loading: true};}
        case TSYS_MENU_ON_SEND_SUCCESS: { return { ...state, loading: false};}
        case TSYS_MENU_ON_SEND_FAILURE: { return { ...state, loading: false};}
        default: return {...state};
    }
}

export default TsysMenuReducer;