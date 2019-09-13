import * as actions from './oddActions'
import * as service from '../../service'

export function getOddListActionCreator(token, match_id) {
    return dispatch => {
        dispatch(actions.getOddListRequest())
        return service.getOddist(token, match_id)
            .then(oddList => dispatch(actions.getOddListSuccess(oddList)))
            .catch(error => dispatch(actions.getOddListFail(error)))
    }
}