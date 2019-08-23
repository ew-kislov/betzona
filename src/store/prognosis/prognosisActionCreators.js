import * as actions from './prognosisActions'
import { getPrognosisList, getPrognosis } from '../../service'

export function getPrognosisListActionCreator(isRefreshing = false) {
    return dispatch => {
        if (isRefreshing)
            dispatch(actions.getPrognosisListRefreshRequest())
        else
            dispatch(actions.getPrognosisListRequest())

        return getPrognosisList()
            .then(prognosisList => dispatch(actions.getPrognosisListSuccess(prognosisList)))
            .catch(error => dispatch(actions.getPrognosisListFail(error)))
    }
}

export function getPrognosisActionCreator(path, isRefreshing = false) {
    return dispatch => {
        if (isRefreshing)
            dispatch(actions.getPrognosisRefreshRequest)
        else
            dispatch(actions.getPrognosisRequest())

        return getPrognosis(path)
            .then(prognosis => dispatch(actions.getPrognosisSuccess(prognosis)))
            .catch(error => dispatch(actions.getPrognosisFail(error)))
    }
}