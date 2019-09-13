import * as actionTypes from './matchActionTypes'

export const getMatchListRequest = () => ({
    type: actionTypes.GET_MATCH_LIST_REQUEST
})

export const getMatchListSuccess = matchList => ({
    type: actionTypes.GET_MATCH_LIST_SUCCESS,
    matchList
})

export const getMatchListFail = error => ({
    type: actionTypes.GET_MATCH_LIST_FAIL,
    error
})