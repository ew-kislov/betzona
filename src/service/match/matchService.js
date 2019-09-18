import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import { transformMatchListResponse } from './matchTransformers'

export function getMatchList(token, tournament_id) {
    return axios.get(BACKEND_URL + '/line/matches?tournament_id=' + tournament_id, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformMatchListResponse(response.data.data))
}

export function getNextMatches(token) {
    return axios.get(BACKEND_URL + '/line/next-matches', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformMatchListResponse(response.data.data))
}

export function getPopularMatches(token) {
    return axios.get(BACKEND_URL + '/line/popular-matches', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformMatchListResponse(response.data.data))
}