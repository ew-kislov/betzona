import * as actions from './matchActions'
import * as service from '../../service'

export function getMatchListActionCreator(token, { tournament_id, popular, nearest }) {
    return dispatch => {
        dispatch(actions.getMatchListRequest())

        let serviceFunction
        if (tournament_id)
            serviceFunction = () => service.getMatchList(token, tournament_id)
        else if (popular)
            serviceFunction = () => service.getPopularMatches(token)
        else
            serviceFunction = () => service.getNextMatches(token)

        return serviceFunction()
            .then(matchList => dispatch(actions.getMatchListSuccess(matchList)))
            .catch(error => dispatch(actions.getMatchListFail(actions.getMatchListFail(error))))
    }
}