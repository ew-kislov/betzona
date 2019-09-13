import * as actions from './tournamentActions'
import * as service from '../../service'

export function getTournamentListActionCreator(token, sport_id) {
    return dispatch => {
        dispatch(actions.getTournamentListRequest())
        return service.getTournamentList(token, sport_id)
            .then(tournamentList => dispatch(actions.getTournamentListSuccess(tournamentList)))
            .catch(error => dispatch(actions.getTournamentListFail(error)))
    }
}