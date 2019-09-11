import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { prognosisReducer, authReducer, profileReducer, sportReducer } from '../store'

export function configureStore(preloadedState) {
    const rootReducer = combineReducers({
        prognosis: prognosisReducer,
        auth: authReducer,
        profile: profileReducer,
        sport: sportReducer
    })

    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}