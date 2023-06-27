import {TodolistType} from "../AppRoot_9";

export const TodolistsReducer = (state: TodolistType[], action: any): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return  state.filter(t => t.id != action.id)
        }
        default:
            return state
    }
}