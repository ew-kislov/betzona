import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { prognosisReducer, authReducer } from '../store'

export function configureStore(preloadedState) {
    const rootReducer = combineReducers({
        prognosis: prognosisReducer,
        auth: authReducer
    })

    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}