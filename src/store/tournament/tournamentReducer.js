import * as actionTypes from './tournamentActionTypes'

const initialState = {
    loading: false,
    tournamentList: [],
    error: false
}

export function tournamentReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_TOURNAMENT_LIST_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_TOURNAMENT_LIST_SUCCESS:
            return { ...state, loading: false, tournamentList: action.tournamentList, error: false }
        case actionTypes.GET_TOURNAMENT_LIST_FAIL:
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}