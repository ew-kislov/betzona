import * as actionTypes from './profileAcitonTypes'

export const getProfileBetsRequest = () => ({
    type: actionTypes.GET_PROFILE_BETS_REQUEST
})
export const getProfileBetsSuccess = (profileBets) => ({
    type: actionTypes.GET_PROFILE_BETS_SUCCESS,
    profileBets
})
export const getProfileBetsFail = ({ error }) => ({
    type: actionTypes.GET_PROFILE_BETS_FAIL,
    error
})

export const getProfileBankRequest = () => ({
    type: actionTypes.GET_PROFILE_BANK_REQUEST
})
export const getProfileBankSuccess = profileBank => ({
    type: actionTypes.GET_PROFILE_BANK_SUCCESS,
    profileBank
})
export const getProfileBankFail = error => ({
    type: actionTypes.GET_PROFILE_BANK_FAIL,
    error
})

export const getProfileStatsRequest = () => ({
    type: actionTypes.GET_PROFILE_STATS_REQUEST
})
export const getProfileStatsSuccess = profileStats => ({
    type: actionTypes.GET_PROFILE_STATS_SUCCESS,
    profileStats
})
export const getProfileStatsFail = error => ({
    type: actionTypes.GET_PROFILE_STATS_FAIL,
    error
})