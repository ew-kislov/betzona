import * as actionTypes from './prognosisActionTypes'

const initialState = {
    prognosisListLoading: false,
    prognosisListRefreshing: false,
    prognosisList: {
        'все': [],
        'сегодня': [],
        'завтра': []
    },
    prognosisListError: null,

    prognosisLoading: false,
    prognosisRefreshing: false,
    prognosis: {},
    prognosisError: null
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
            return { ...state, prognosisLoading: true }
        case actionTypes.GET_PROGNOSIS_REFRESH_REQUEST:
            return { ...state, prognosisRefreshing: true }
        case actionTypes.GET_PROGNOSIS_SUCCESS:
            return { ...state, prognosis: action.prognosis, prognosisLoading: false, prognosisRefreshing: false }
        case actionTypes.GET_PROGNOSIS_FAIL:
            return { ...state, prognosisError: action.prognosisError, prognosisLoading: false, prognosisRefreshing: false }

        default:
            return state
    }
}