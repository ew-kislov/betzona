import * as actionTypes from './profileAcitonTypes'

const initialState = {
    loading: false,
    profileBets: [],
    profileStats: {},
    error: false
}

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PROFILE_BETS_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_PROFILE_BETS_SUCCESS:
            return { ...state, profileBets: action.profileBets, loading: false }
        case actionTypes.GET_PROFILE_BETS_FAIL:
            return { ...state, error: action.error, loading: false }

        case actionTypes.GET_PROFILE_BANK_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_PROFILE_BANK_SUCCESS:
            console.warn(action.profileBank)
            return { ...state, ...(action.profileBank), loading: false }
        case actionTypes.GET_PROFILE_BANK_FAIL:
            return { ...state, error: action.error, loading: false }

        case actionTypes.GET_PROFILE_STATS_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_PROFILE_STATS_SUCCESS:
            return { ...state, profileStats: action.profileStats, ...(action.profileStats.profile), loading: false }
        case actionTypes.GET_PROFILE_STATS_FAIL:
            return { ...state, error: action.error, loading: false }

        default:
            return state
    }
}