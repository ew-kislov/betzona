import * as actionTypes from './sportActionTypes'

const initialState = {
    loading: false,
    sportList: [],
    error: false
}

export function sportReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SPORT_LIST_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_SPORT_LIST_SUCCESS:
            return { ...state, loading: false, sportList: action.sportList, error: false }
        case actionTypes.GET_SPORT_LIST_FAIL:
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}