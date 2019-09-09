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