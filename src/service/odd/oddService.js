import axios from 'axios'

import { BACKEND_URL } from '../../constants'

export function getOddist(token, match_id) {
    return axios.get(BACKEND_URL + '/line/odds?match_id=' + match_id, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {console.warn(response.data.data); return response.data.data})
        .catch(error => [])
}