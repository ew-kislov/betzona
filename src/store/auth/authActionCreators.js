import * as actions from './authActions'
import * as service from '../../service/auth/authService'

export function loginActionCreator(username, password) {
    return dispatch => {
        dispatch(actions.authRequest())
        return service.login(username, password)
            .then(token => dispatch(actions.loginSuccess({ username, token })))
            .catch(error => dispatch(actions.authFail(error)))
    }
}

export function logoutActionCreator() {
    return dispatch => {
        dispatch(actions.authRequest())
        return service.logout()
            .then(() => dispatch(actions.logoutSuccess()))
            .catch(error => dispatch(actions.authFail(error)))
    }
}

export function initAuthDataActionCreator() {
    return dispatch => {
        dispatch(actions.authRequest())
        return service.initAuthData()
            .then(({ token, username }) => dispatch(actions.initAuthDataSuccess({ username, token })))
            .catch(error => dispatch(actions.authFail(error)))
    }
}

export function registrationActionCreator(username, email, password) {
    return dispatch => {
        dispatch(actions.authRequest())
        return service.registrate(username, email, password)
            .then(token => dispatch(actions.registrationSuccess({ username, token })))
            .catch(error => dispatch(actions.authFail(error?.response?.data?.message)))
    }
}
