import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import {
    transformProfileBetsResponse,
    tranformProfileBankResponse,
    transformProfileStatsResponse
} from './profileTransformers'

export function getProfileBets(username) {
    return axios.get(BACKEND_URL + '/profile/bets?username=' + username)
        .then(response => transformProfileBetsResponse(response.data.data))
}

export function getProfileBank(token) {
    return axios.get(BACKEND_URL + '/profile/bank', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => tranformProfileBankResponse(response.data.data))
}

export function getProfileStats(username) {
    return axios.get(BACKEND_URL + '/profile/stats?username=' + username)
        .then(response => transformProfileStatsResponse(response.data.data));
}