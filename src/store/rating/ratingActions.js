import * as actionTypes from './ratingActionTypes'

export const getMonthRatingRequest = () => ({
    type: actionTypes.GET_MONTH_RATING_REQUEST
})

export const getMonthRatingSuccess = monthRating => ({
    type: actionTypes.GET_MONTH_RATING_SUCCESS,
    monthRating
})

export const getMonthRatingFail = error => ({
    type: actionTypes.GET_MONTH_RATING_FAIL,
    error
})