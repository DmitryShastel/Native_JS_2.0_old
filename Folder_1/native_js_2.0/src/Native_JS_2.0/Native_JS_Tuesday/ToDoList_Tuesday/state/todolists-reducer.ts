import {ToDoListsType} from "../App_Root_Tuesday";
import {v1} from "uuid";

export const todolistsReducer = (state: ToDoListsType[], action: TodolistsReducerType): ToDoListsType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(el => el.id !== action.payload.id)

        case 'ADD-TODOLIST' :
            let todolistId = v1()
            let newTodolist = {id: todolistId, title: action.payload.todolistTitle, filter: 'all'}
            return [ ...state, newTodolist ]

        default:
            return state
    }
};

type TodolistsReducerType = RemoveTodolistACType | AddTodolistACType
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
type AddTodolistACType = ReturnType<typeof addTodolistAC>

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id
        }
    } as const
}

export const addTodolistAC = (todolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            todolistTitle
        }
    } as const
}