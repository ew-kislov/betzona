import * as actions from './matchActions'
import * as service from '../../service'

export function getMatchListActionCreator(token, tournament_id) {
    return dispatch => {
        console.warn(token + ' ' + tournament_id)
        dispatch(actions.getMatchListRequest())
        return service.getMatchList(token, tournament_id)
            .then(matchList => dispatch(actions.getMatchListSuccess(matchList)))
            .catch(error => dispatch(actions.getMatchListFail(actions.getMatchListFail(error))))
    }
}