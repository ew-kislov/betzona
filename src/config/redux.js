import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { prognosisReducer } from '../store'

export function configureStore(preloadedState) {
    const rootReducer = combineReducers({
        prognosis: prognosisReducer
    })

    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))
}