import { Reducer } from "redux"
import { AccountDispatchAction } from "./action"
import ActionType from "./actionType"

export interface AccountState {
    loggedIn: boolean
}

const initialState: AccountState = {
    loggedIn: false
}

export const accountReducer: Reducer<AccountState, AccountDispatchAction> = (state = initialState, action) => {
    switch(action.type){
        case ActionType.UpdateAccount: {
            return {
                ...state,
                loggedIn: Boolean(action.payload.loggedIn)
            }
        }
        default: {
            return {...state}
        }
    }
}