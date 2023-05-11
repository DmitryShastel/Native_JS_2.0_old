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



type ActionTypes = removeTodolistACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>;
export const removeTodolistAC = (todolistID: string) => {
  return {
    type: "REMOVE-TODOLIST",
    payload: {
      todolistID,
    },
  } as const;
};


