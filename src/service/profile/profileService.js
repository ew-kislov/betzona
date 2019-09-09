import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import { transformProfileBetsResponse } from './profileTransformers'

export function getProfileBets(username) {
    return axios.get(BACKEND_URL + '/profile/bets/?username=' + 'admin')
        .then(response => transformProfileBetsResponse(response.data.data))
}