import * as actionTypes from './oddActionTypes'

const initialState = {
    loading: false,
    oddList: {},
    error: false
}

export function oddReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ODD_LIST_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_ODD_LIST_SUCCESS:
            return { ...state, oddList: action.oddList, loading: false }
        case actionTypes.GET_ODD_LIST_FAIL:
            return { ...state, error: action.error, loading: false }
        default:
            return state
    }
}