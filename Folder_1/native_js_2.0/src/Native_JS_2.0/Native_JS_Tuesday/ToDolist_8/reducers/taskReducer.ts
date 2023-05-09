import {TaskType} from "../Todolist_8";
import {v1} from "uuid";


type ActionsType = AddTaskACType | RemoveTaskACType

export const TaskReducer = (state: TaskType[], action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(t => t.id !== action.payload.taskID)
        }

        case 'ADD-TASK': {
            return [{
                id: v1(),
                title: action.payload.taskTitle,
                isDone: false
            }, ...state,]
        }

        default:
            return state
    }
};

type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskID: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskID: taskID
        }
    } as const
}


type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (taskTitle: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            taskTitle: taskTitle
        }
    } as const
}