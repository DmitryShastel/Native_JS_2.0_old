import {ActionType, StateType} from "./homeWorkReducer.test";


const SORT_UP = 'sort-up'
const SORT_DOWN = 'sort-down'
const CHECK = 'check'


export const homeWorkReducer = (state: StateType[], action: ActionType): StateType[] => {
    switch (action.type) {
        case SORT_UP: {
            let copyState = [...state]
            let result = copyState.slice().sort((a, b) => a.name.localeCompare(b.name));
            return result
        }
        case SORT_DOWN: {
            let copyState = [...state]
            let result = copyState.slice().sort((a, b) => b.name.localeCompare(a.name));
            return result
        }
        case CHECK: {
            let copyState = [...state]
            let result = copyState.filter((item) => item.age >= 18).sort((a, b) => b.age - a.age)
            return result
        }
        default:
            return state
    }
};