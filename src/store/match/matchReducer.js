import * as actionTypes from './matchActionTypes'

const initialState = {
    loading: false,
    matchList: [],
    error: false
}

export function matchReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_MATCH_LIST_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_MATCH_LIST_SUCCESS:
            return { ...state, matchList: action.matchList, loading: false }
        case actionTypes.GET_MATCH_LIST_FAIL:
            return { ...state, error: action.error, loading: false }
        default:
            return state
    }
}