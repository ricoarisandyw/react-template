import {combineReducers} from 'redux'
import { accountReducer } from './components'

export const rootReducer = combineReducers({
    account: accountReducer
})

export type RootState = ReturnType<typeof rootReducer>
