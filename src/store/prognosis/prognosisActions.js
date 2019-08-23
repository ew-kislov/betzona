import * as actionTypes from './prognosisActionTypes'

export const getPrognosisListRequest = () => ({
    type: actionTypes.GET_PROGNOSIS_LIST_REQUEST
})
export const getPrognosisListRefreshRequest = () => ({
    type: actionTypes.GET_PROGNOSIS_LIST_REFRESH_REQUEST
})
export const getPrognosisListSuccess = prognosisList => ({
    type: actionTypes.GET_PROGNOSIS_LIST_SUCCESS,
    prognosisList
})
export const getPrognosisListFail = prognosisListError => ({
    type: actionTypes.GET_PROGNOSIS_LIST_FAIL,
    prognosisListError
})

export const getPrognosisRequest = () => ({
    type: actionTypes.GET_PROGNOSIS_REQUEST
})
export const getPrognosisRefreshRequest = () => ({
    type: actionTypes.GET_PROGNOSIS_REFRESH_REQUEST
})
export const getPrognosisSuccess = prognosis => ({
    type: actionTypes.GET_PROGNOSIS_SUCCESS,
    prognosis
})
export const getPrognosisFail = prognosisError => ({
    type: actionTypes.GET_PROGNOSIS_FAIL,
    prognosisError
})