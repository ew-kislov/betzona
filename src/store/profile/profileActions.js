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