import * as actionTypes from './oddActionTypes'

export const getOddListRequest = () => ({
    type: actionTypes.GET_ODD_LIST_REQUEST
})

export const getOddListSuccess = oddList => ({
    type: actionTypes.GET_ODD_LIST_SUCCESS,
    oddList
})

export const getOddListFail = error => ({
    type: actionTypes.GET_ODD_LIST_FAIL,
    error
})