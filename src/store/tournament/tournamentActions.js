import * as actionTypes from './tournamentActionTypes'

export const getTournamentListRequest = () => ({
    type: actionTypes.GET_TOURNAMENT_LIST_REQUEST
})

export const getTournamentListSuccess = tournamentList => ({
    type: actionTypes.GET_TOURNAMENT_LIST_SUCCESS,
    tournamentList
})

export const getTournamentListFail = error => ({
    type: actionTypes.GET_TOURNAMENT_LIST_FAIL,
    error
})