import * as actionTypes from './prognosisActionTypes'
import { DAY_TYPES } from '../../constants'

const initialState = {
    prognosisListLoading: false,
    prognosisListRefreshing: false,
    prognosisList: {
        [DAY_TYPES.ALL]: [],
        [DAY_TYPES.TODAY]: [],
        [DAY_TYPES.TOMORROW]: []
    },
    prognosisListError: null,

    prognosisLoading: false,
    prognosisRefreshing: false,
    prognosis: {},
    prognosisError: null,

    addPrognosisLoading: false,
    addPrognosisError: false
}

export function prognosisReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PROGNOSIS_LIST_REQUEST:
            return { ...state, prognosisListLoading: true }
        case actionTypes.GET_PROGNOSIS_LIST_REFRESH_REQUEST:
            return { ...state, prognosisListRefreshing: true }
        case actionTypes.GET_PROGNOSIS_LIST_SUCCESS:
            return { ...state, prognosisList: action.prognosisList, prognosisListLoading: false, prognosisListRefreshing: false }
        case actionTypes.GET_PROGNOSIS_LIST_FAIL:
            return { ...state, prognosisListError: action.prognosisListError, prognosisListLoading: false, prognosisListRefreshing: false }

        case actionTypes.GET_PROGNOSIS_REQUEST:
            return { ...state, prognosisLoading: true, prognosisError: false }
        case actionTypes.GET_PROGNOSIS_REFRESH_REQUEST:
            return { ...state, prognosisRefreshing: true, prognosisError: false }
        case actionTypes.GET_PROGNOSIS_SUCCESS:
            return { ...state, prognosis: action.prognosis, prognosisLoading: false, prognosisRefreshing: false, prognosisError: false }
        case actionTypes.GET_PROGNOSIS_FAIL:
            return { ...state, prognosisError: action.prognosisError, prognosisLoading: false, prognosisRefreshing: false }

        case actionTypes.ADD_PROGNOSIS_REQUEST:
            return { ...state, addPrognosisLoading: true }
        case actionTypes.ADD_PROGNOSIS_SUCCESS:
            return { ...state, addPrognosisError: false, addPrognosisLoading: false }
        case actionTypes.ADD_PROGNOSIS_FAIL:
            return { ...state, addPrognosisError: action.error, addPrognosisLoading: false }

        default:
            return state
    }
}