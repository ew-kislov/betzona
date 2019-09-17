import * as service from '../../service/profile/profileService'
import * as actions from './profileActions'

export function getProfileBetsActionCreator(username) {
    return dispatch => {
        dispatch(actions.getProfileBetsRequest())
        return service.getProfileBets(username)
            .then(profileBets => dispatch(actions.getProfileBetsSuccess(profileBets)))
            .catch(error => dispatch(actions.getProfileBetsFail(error)))
    }
}

export function getProfileBankActionCreator(token) {
    return dispatch => {
        dispatch(actions.getProfileBankRequest)
        return service.getProfileBank(token)
            .then(profileBank => dispatch(actions.getProfileBankSuccess(profileBank)))
            .catch(error => dispatch(actions.getProfileBankFail(error)))

    }
}