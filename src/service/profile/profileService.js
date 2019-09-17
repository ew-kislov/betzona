import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import { transformProfileBetsResponse } from './profileTransformers'

export function getProfileBets(username) {
    return axios.get(BACKEND_URL + '/profile/bets/?username=' + username)
        .then(response => transformProfileBetsResponse(response.data.data))
}

export function getProfileBank(token) {
    return axios.get(BACKEND_URL + '/profile/bank', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => response.data.data)
}