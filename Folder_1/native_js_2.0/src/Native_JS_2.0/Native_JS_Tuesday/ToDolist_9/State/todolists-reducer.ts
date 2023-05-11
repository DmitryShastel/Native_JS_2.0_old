import React from "react";
import { TodolistType } from "../AppRoot_9";


export const TodolistsReducer = (state: TodolistType[],action: ActionTypes): TodolistType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
        return  state.filter((t) => t.id !== action.payload.todolistID);
      }
    default:
      return state;
  }
};



type ActionTypes = removeTodolistACType | addTodolistACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (todolistID: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todolistID,
    },
  } as const;
};



export const addTodolistAC = (todolistId: string, newTitle: string ) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            todolistId,
            newTitle
        }
    } as const
}


