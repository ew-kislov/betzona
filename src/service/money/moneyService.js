import axios from 'axios'

import { BACKEND_URL } from '../../constants'

import { transformMoneyResponse } from './moneyTransformers'

export function getMoneyList(token, oddstype_id, match_id) {
    return axios.get(BACKEND_URL + '/line/money?match_id=' + match_id + '&oddstype_id=' + oddstype_id, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => transformMoneyResponse(response.data.data))
}