import axios from 'axios'
import { BACKEND_URL, TOKEN } from '../../constants'
import { prognosisListResponseTransformer, prognosisResponseTransformer } from './prognosisTransformers'

export function getPrognosisList() {
    return axios.get(BACKEND_URL + '/getBets', { headers: { 'Authorization': 'Bearer ' + TOKEN } })
        .then(response => {
            let prognosisList = prognosisListResponseTransformer(response.data.data)
            return prognosisList
        })
}
export function getPrognosis(path) {
    let formdata = new FormData()
    formdata.append('path', path)
    return axios.post(BACKEND_URL + '/getBetDetail', formdata, { headers: { 'Authorization': 'Bearer ' + TOKEN } })
        .then(response => {
            let prognosis = prognosisResponseTransformer(response.data.data)
            return prognosis
        })
}