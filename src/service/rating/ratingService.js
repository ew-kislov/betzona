import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import { transformRatingResponse } from './ratingTransformer'

export function getMonthRating() {
    return axios.get(BACKEND_URL + '/rating/current')
        .then(response => {
            const rating = transformRatingResponse(response.data.data)
            return rating;
        })
}