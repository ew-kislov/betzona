import * as actionTypes from './authActionTypes'

const initialState = {
    loading: false,
    username: null,
    token: null,
    error: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_REQUEST:
            return { ...state, loading: true, error: false }

        case actionTypes.LOGIN_SUCCESS:
            return { ...state, token: action.token, username: action.username, loading: false, error: false }
        case actionTypes.LOGOUT_SUCCESS:
            return { ...state, token: null, username: null, loading: false, error: false }
        case actionTypes.INIT_AUTH_DATA_SUCCESS:
            return { ...state, token: action.token, username: action.username, error: false, loading: false }

        case actionTypes.AUTH_FAIL:
            return { ...state, error: action.error, loading: false }

        default:
            return state
    }
}