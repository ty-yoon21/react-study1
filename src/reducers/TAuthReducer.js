
import { toast, ToastContainer } from 'react-toastify';
import {TAUTH_SET_IS_AUTH, TAUTH_SET_IS_AUTH_BY_LOGIN, TAUTH_SET_IS_AUTH_ERROR, 
    TAUTH_REGISTER_SUCCESS, TAUTH_REGISTER_ERROR} from '../actions/types';
import { removeCookieToken } from '../utils/cookie';

const INIT_STATTE = {
    isAuth: null,
    error: ''
}

const TAuthReducer = (state = INIT_STATTE, action) => {
    switch(action.type) {
        case TAUTH_SET_IS_AUTH:
            //return {...state, isAuth: action.payload.body.isAuth, error: ''}
           //console.log('##### TsysAuthReducer TAUTH_SET_IS_AUTH : Sueccess : isAuth : ', action.payload.body.isAuth);
            console.log('####!!!!!!!!!!!!!!!!!!!!!!!!!!reducer TAUTH_SET_IS_AUTH action.payload : ', action.payload);
            return {...state, isAuth: action.payload.body.isAuth, error: ''}
            
        case TAUTH_SET_IS_AUTH_BY_LOGIN:
            //return {...state, isAuth: action.payload.body.isAuth, error: ''}
           //console.log('##### TsysAuthReducer TAUTH_SET_IS_AUTH : Sueccess : isAuth : ', action.payload.body.isAuth);
            console.log('####!!!!!!!!!!!!!!!!!!!!!!!!!!reducer TAUTH_SET_IS_AUTH action.payload : ', action.payload);
            return {...state, isAuth: true, error: ''}
        case TAUTH_SET_IS_AUTH_ERROR:
            removeCookieToken();
            return {...state, error: "Error" }
        case TAUTH_REGISTER_SUCCESS: { 
            console.log('##### TsysAuthReducer (AUTH-GET) - action.payload.body : Success');
            toast.success("Success!");
            return { ...state, loading: false};}
        case TAUTH_REGISTER_ERROR: { 
            console.log('##### TsysAuthReducer (AUTH-GET) - state : ', state);
            return { ...state, loading: false};}
        default:
            return {...state};
    }
}

export default TAuthReducer;