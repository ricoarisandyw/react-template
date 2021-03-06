import {createStore, applyMiddleware, compose, Middleware, Dispatch, MiddlewareAPI} from 'redux'
import logger from 'redux-logger'

import {rootReducer} from '../rootReducer'

declare global {
    interface Window {
        // disable unnecesary lint error
        // eslint-disable-next-line no-undef
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose
const thunkArgument = {
    arguments: '',
}
export type ThunkArgument = typeof thunkArgument
const createThunkMiddleware = (extraArgument: unknown): Middleware => {
    return ({dispatch, getState}: MiddlewareAPI) => (next: Dispatch) => (action): unknown => {
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument)
        }
        return next(action)
    }
}
const middlewareList: Array<Middleware> = [createThunkMiddleware(thunkArgument)]
if (APP_ENV === "development") middlewareList.push(logger)
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewareList)))
