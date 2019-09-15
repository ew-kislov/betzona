import * as actions from './moneyActions'
import * as service from '../../service'

export function getMoneyListActionCreator(token, oddstype_id, match_id) {
    return dispatch => {
        dispatch(actions.getMoneyListRequest())
        return service.getMoneyList(token, oddstype_id, match_id)
            .then(moneyList => dispatch(actions.getMoneyListSuccess(moneyList)))
            .catch(error => dispatch(actions.getMoneyListFail(error)))
    }
}