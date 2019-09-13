import axios from 'axios'
import { BACKEND_URL } from '../../constants'

import { transformTournamentListReponse } from './tournamentTransformers'

export function getTournamentList(token, sport_id) {
    return axios.get(BACKEND_URL + '/line/tournaments?sport_id=' + sport_id, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformTournamentListReponse(response.data.data))
}