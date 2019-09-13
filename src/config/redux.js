import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {
    prognosisReducer,
    authReducer,
    profileReducer,
    sportReducer,
    tournamentReducer,
    matchReducer,
    oddReducer
} from '../store'

export function configureStore(preloadedState) {
    const rootReducer = combineReducers({
        prognosis: prognosisReducer,
        auth: authReducer,
        profile: profileReducer,
        sport: sportReducer,
        tournament: tournamentReducer,
        match: matchReducer,
        odd: oddReducer
    })

    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}