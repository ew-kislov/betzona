import * as actionTypes from './sportActionTypes'

export const getSportListRequest = () => ({
    type: actionTypes.GET_SPORT_LIST_REQUEST
})

export const getSportListSuccess = sportList => ({
    type: actionTypes.GET_SPORT_LIST_SUCCESS,
    sportList
})

export const getSportListFail = error => ({
    type: actionTypes.GET_SPORT_LIST_FAIL,
    error
})