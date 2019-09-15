import * as actionTypes from './moneyActionTypes'

export const getMoneyListRequest = () => ({
    type: actionTypes.GET_MONEY_LIST_REQUEST
})

export const getMoneyListSuccess = moneyList => ({
    type: actionTypes.GET_MONEY_LIST_SUCCESS,
    moneyList
})

export const getMoneyListFail = error => ({
    type: actionTypes.GET_MONEY_LIST_FAIL,
    error
})