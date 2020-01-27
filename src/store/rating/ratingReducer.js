import * as actionTypes from './ratingActionTypes'

const initialState = {
    loading: false,
    monthRating: [],
    error: false
}

export function ratingReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_MONTH_RATING_REQUEST:
            return { ...state, loading: true }
        case actionTypes.GET_MONTH_RATING_SUCCESS:
            return { ...state, monthRating: action.monthRating, loading: false, error: false }
        case actionTypes.GET_MONTH_RATING_FAIL:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}