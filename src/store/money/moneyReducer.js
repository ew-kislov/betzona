import * as actionTypes from './moneyActionTypes'

const initialState = {
    loading: false,
    moneyList: [],
    error: false
}

export function moneyReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_MONEY_LIST_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_MONEY_LIST_SUCCESS:
            return { ...state, moneyList: action.moneyList, loading: false }
        case actionTypes.GET_MONEY_LIST_FAIL:
            return { ...state, error: action.error, loading: false }
        default:
            return state
    }
}