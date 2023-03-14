/**
 * Todo App Actions
 */

import {TAUTH_LOGIN, TAUTH_IS_AUTH, TAUTH_SET_IS_AUTH, TAUTH_SET_IS_AUTH_BY_LOGIN, TAUTH_SET_IS_AUTH_ERROR, 
    TAUTH_REGISTER, TAUTH_REGISTER_SUCCESS, TAUTH_REGISTER_ERROR} from './types';

/**
 * Redux Actions
 */

export const tAuthLogin = (payload) => ({
    type: TAUTH_LOGIN,
    payload
});

export const tAuthIsAuth = (payload) => ({
    type: TAUTH_IS_AUTH,
    payload
});

export const setTAuthIsAuth = (response) => ({
    type: TAUTH_SET_IS_AUTH,
    payload: response.data
});

export const setTAuthIsAuthByLogin = (response) => ({
    type: TAUTH_SET_IS_AUTH_BY_LOGIN,
    payload: response.data
})

export const setTAuthIsAuthError = (response) => ({
    type: TAUTH_SET_IS_AUTH_ERROR,
    payload: response.data
});

export const tAuthRegister = (payload) => ({
    type: TAUTH_REGISTER,
    payload
});

export const tAuthRegisterSuccess = (response) => ({
    type: TAUTH_REGISTER_SUCCESS,
    payload: response
});

export const tAuthRegisterError = (error) => ({
    type: TAUTH_REGISTER_ERROR,
    payload: error
});