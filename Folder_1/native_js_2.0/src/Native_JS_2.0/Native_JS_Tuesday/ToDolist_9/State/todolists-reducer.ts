import React from "react";
import { TodolistType } from "../AppRoot_9";
import { v1 } from "uuid";

export const TodolistsReducer = (state: TodolistType[],action: ActionTypes): TodolistType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((t) => t.id !== action.payload.todolistID);
    }

    case "ADD-TODOLIST": {
      return [
        { id: v1(), title: action.payload.newTitle, filter: 'all' }, 
        ...state];
    }

    default:
      return state;
  }
};

type ActionTypes = removeTodolistACType | addTodolistACType | changeTodolistACType;
type removeTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (todolistID: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todolistID,
    },
  } as const;
};

type addTodolistACType = ReturnType<typeof addTodolistAC>;
export const addTodolistAC = ( newTitle: string) => {
  return {
    type: "ADD-TODOLIST",
    payload: {
      newTitle
    },
  } as const;
};


type changeTodolistACType = ReturnType<typeof changeTodolistAC>;
export const changeTodolistAC = (todolistID: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID
        }
    } as const
}
