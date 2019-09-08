import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import { prognosisListResponseTransformer, prognosisResponseTransformer } from './prognosisTransformers'

export function getPrognosisList() {
    return axios.get(BACKEND_URL + '/getbets')
        .then(response => {
            let prognosisList = prognosisListResponseTransformer(response.data.data)
            return prognosisList
        })
}
export function getPrognosis(path) {
    let formdata = new FormData()
    formdata.append('path', path)
    return axios.post(BACKEND_URL + '/getbetdetail', formdata)
        .then(response => {
            let prognosis = prognosisResponseTransformer(response.data.data)
            return prognosis
        })
}