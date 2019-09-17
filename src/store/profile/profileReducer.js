import * as actionTypes from './profileAcitonTypes'

const initialState = {
    loading: false,
    profileBets: [],
    profileBank: {},
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
            return { ...state, profileBank: action.profileBank, loading: false }
        case actionTypes.GET_PROFILE_BANK_FAIL:
            return { ...state, error: action.error, loading: false }

        default:
            return state
    }
}