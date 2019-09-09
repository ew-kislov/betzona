import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { prognosisReducer, authReducer, profileReducer } from '../store'

export function configureStore(preloadedState) {
    const rootReducer = combineReducers({
        prognosis: prognosisReducer,
        auth: authReducer,
        profile: profileReducer
    })

    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}