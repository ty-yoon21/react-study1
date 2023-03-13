/**
 * Todo Sagas
 * //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}`, 'Content-Type': 'application/json'},
 */

import {all, call, fork, put, take, takeEvery} from 'redux-saga/effects';
import {message} from 'antd';

import api from '../api';

import {TAUTH_LOGIN, TAUTH_REGISTER} from '../actions/types';
import {setTAuthIsAuth, setTAuthIsAuthError, tAuthRegister, tAuthRegisterSuccess, tAuthRegisterError} from '../actions';

import { setRefreshToken } from '../utils/cookie';


const post = async(url, request) => await api({
    mehod: 'post',
    url,
    data: JSON.stringify(request.payload),
    headers: {'Content-Type': 'application/json'},
    //headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`, 'Content-Type': 'application/json'},
    
}).then((response) => {
    return response;
}).cathch((error) => {
    console.log('######## error : ', error);
    if (error.response.status === 401) {
        localStorage.removeItem('jwt-access');
        //localStorage.removeItem('user');
        window.location = '/'
    }
    return error;
});



// function* tAuthLoginToServer(action) {
//     const {username, password, navigate} = action.payload;
    
//     const req = {
//         payload: {
//             USERNAME: username,
//             PASSWORD: password
//         }
//     }
//     try {
//         const response = yield call(post, '/api/auth/login', req);
//         if (response.data.statusCode === 0 && response.data.body.errorCode === 400){
//             yield put(setTAuthIsAuthError(response))
//         } else if (response.data.statusCode === 0) {
//             yield put(setTAuthIsAuth(response));
//             yield localStorage.setItem('User', JSON.stringify(response.data.body));
//             navigate('/');
//         }
//     } catch (error) {
//         message.error('Auth - SERVER ERROR');
//     }
// }

function* tAuthLoginToServer(action) {
    const {account, password, navigate} = action.payload;
    
    const req = {
        payload: {
            ACCOUNT: account,
            PASSWORD: password
        }
    }
    try {
        //const response = yield call(post, '/api/auth/login', req);
        const response = yield call(getLoginRequest, action);
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer response : ',response);
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer response.status : ',response.status);
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer response.data.token : ',response.data.token);
        if (response.status === 200){
            console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer ok : ');
            yield put(setTAuthIsAuth(response));
            //yield localStorage.setItem('jwt', JSON.stringify(response.data.token));
            console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer response.data.token : ',response.data.token);
            //console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthLoginToServer JSON.stringfy(response.data.token) : ',JSON.stringfy(response.data.token));
            //JSON.stringfy(response.data.token) 형태로 저장하게 되면 jwt에 ""가 씌여저서 오류발생함
            yield localStorage.setItem('jwt-access', response.data.token);
            setRefreshToken(response.data.refreshToken.value);

            navigate('/');
        } else if (response.data.statusCode === 0) {
            yield put(setTAuthIsAuthError(response))
            navigate('/login');
        }
    } catch (error) {
        message.error('Auth - SERVER ERROR');
    }
}


const getLoginRequest = async (request) =>
    await api( {
        method: 'post',
        url: '/api/auth/login',
        data: JSON.stringify(request.payload),
        headers: {'Content-Type': 'application/json'},
        //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}` 'Content-Type': 'application/json'},
        
    }).then((response) => {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - getLoginRequest : ',response);
        return response;
    }).catch((error) => {
        return error;
    });


    function* tAuthRegisterToServer(action) {
        const {account, password, username, email, nickname, navigate} = action.payload;
        
        const req = {
            payload: {
                ACCOUNT: account,
                PASSWORD: password,
                USERNAME: username,
                EMAIL: email,
                NICKNAME: nickname,
            }
        }
        try {
            //const response = yield call(post, '/api/auth/login', req);
            const response = yield call(getUserRegisterRequest, action);
            console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthRegisterToServer response : ',response);
            //if (response.data.statusCode === 0 && response.data.body.errorCode === 400){
            if (response.data.statusCode === 0){
                console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - tAuthRegisterToServer success : ');
                yield put(tAuthRegisterSuccess(response));
                //yield localStorage.setItem('User', JSON.stringify(response.data.body));
                navigate('/login');
                
            } else if (response.data.statusCode === 0) {
                yield put(tAuthRegisterError(response))
            }
        } catch (error) {
            message.error('Auth - SERVER ERROR');
        }
    }

    const getUserRegisterRequest = async (request) =>
    await api( {
        method: 'post',
        url: '/api/auth/register',
        data: JSON.stringify(request.payload),
        headers: {'Content-Type': 'application/json'},
        //headers: {Authorization: `Bearer ${localStorage.getItem('id_token')}` 'Content-Type': 'application/json'},
        
    }).then((response) => {
        console.log('#############@@@@@@@@@@@@@@@@@@@@@@@ tsysAuthSagas - getUserRegisterRequest : ',response);
        return response;
    }).catch((error) => {
        return error;
    });

export function* tAuthLoginSagas() {
    yield takeEvery(TAUTH_LOGIN, tAuthLoginToServer);
}

export function* ttAuthRegisterSagas() {
    yield takeEvery(TAUTH_REGISTER, tAuthRegisterToServer);
}

export default function* TAuthSagas() {
    yield all( [
        fork(tAuthLoginSagas),
        fork(ttAuthRegisterSagas),
    ]);
}