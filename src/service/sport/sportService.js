import axios from 'axios'
import { BACKEND_URL } from '../../constants'

import { transformSportListResponse } from './sportTransformers'

export function getSportList(token) {
    return axios.get(BACKEND_URL + '/line/sports', { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformSportListResponse(response.data.data))
}