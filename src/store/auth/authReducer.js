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
            return { ...state, loading: true }

        case actionTypes.LOGIN_SUCCESS:
            return { ...state, token: action.token, username: action.username, loading: false }
        case actionTypes.LOGOUT_SUCCESS:
            return { ...state, token: null, username: null, loading: false }
        case actionTypes.INIT_AUTH_DATA_SUCCESS:
            return { ...state, token: action.token, username: action.username, loading: false }

        case actionTypes.AUTH_FAIL:
            return { ...state, error: action.error, loading: false }

        default:
            return state
    }
}