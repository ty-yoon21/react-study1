
import { toast, ToastContainer } from 'react-toastify';
import {TAUTH_SET_IS_AUTH, TAUTH_SET_IS_AUTH_ERROR, 
    TAUTH_REGISTER_SUCCESS, TAUTH_REGISTER_ERROR} from '../actions/types';

const INIT_STATTE = {
    isAuth: null,
    error: ''
}

const TAuthReducer = (state = INIT_STATTE, action) => {
    switch(action.type) {
        case TAUTH_SET_IS_AUTH:
            //return {...state, isAuth: action.payload.body.isAuth, error: ''}
            return {...state, isAuth: true, error: ''}
        case TAUTH_SET_IS_AUTH_ERROR:
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