import * as actions from './sportActions'
import * as service from '../../service'

export function getSportListActionCreator(token) {
    return dispatch => {
        dispatch(actions.getSportListRequest())
        return service.getSportList(token)
            .then(sportList => dispatch(actions.getSportListSuccess(sportList)))
            .catch(error => dispatch(actions.getSportListFail(error)))
    }
}