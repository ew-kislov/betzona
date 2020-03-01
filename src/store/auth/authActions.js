import * as actionTypes from './authActionTypes'

export const authRequest = () => ({
    type: actionTypes.AUTH_REQUEST,
})
export const registrationRequest = () => ({
    type: actionTypes.REGISTRATION_REQUEST
})

export const loginSuccess = ({ token, username }) => ({
    type: actionTypes.LOGIN_SUCCESS,
    token,
    username
})
export const logoutSuccess = () => ({
    type: actionTypes.LOGOUT_SUCCESS
})
export const initAuthDataSuccess = ({ token, username }) => ({
    type: actionTypes.INIT_AUTH_DATA_SUCCESS,
    token,
    username
})
export const registrationSuccess = ({ token, username }) => ({
    type: actionTypes.REGISTRATION_SUCCESS,
    token,
    username
})

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error
})
export const registrationFail = error => ({
    type: actionTypes.REGISTRATION_FAIL,
    error
})