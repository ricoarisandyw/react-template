import { Action } from "redux";
import ActionType from "./actionType";
import { AccountState } from "./reducer";

export interface AccountDispatchAction extends Action<string> {
    payload: Partial<AccountState>
}

export const updateAccount = (loggedIn: boolean): AccountDispatchAction => ({
    type: ActionType.UpdateAccount,
    payload: {loggedIn}
})