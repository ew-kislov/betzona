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
    console.warn('in creator')
    console.warn(token)
    return dispatch => {
        dispatch(actions.getProfileBankRequest)
        return service.getProfileBank(token)
            .then(profileBank => { console.warn('got profileBank'); console.warn(profileBank); return dispatch(actions.getProfileBankSuccess(profileBank))})
            .catch(error => { console.warn(error); dispatch(actions.getProfileBankFail(error))})
    }
}

export function getProfileStatsActionCreator(username) {
    return dispatch => {
        dispatch(actions.getProfileStatsRequest)
        return service.getProfileStats(username)
            .then(profileStats => dispatch(actions.getProfileStatsSuccess(profileStats)))
            .catch(error => dispatch(actions.getProfileStatsFail(error)))
    }
}