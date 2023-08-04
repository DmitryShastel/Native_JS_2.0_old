import {ActionType, StateType} from "./homeWorkReducer.test";

export const homeWorkReducer = (state: StateType[], action: ActionType): StateType[] => {
    switch (action.type) {
        case "sort": {

            return state
        }
        case "check": {

            return state
        }
        default: return state
    }
};