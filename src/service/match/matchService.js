import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import { transformMatchListResponse } from './matchTransformers'

export function getMatchList(token, tournament_id) {
    return axios.get(BACKEND_URL + '/line/matches?tournament_id=' + tournament_id, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformMatchListResponse(response.data.data))
}