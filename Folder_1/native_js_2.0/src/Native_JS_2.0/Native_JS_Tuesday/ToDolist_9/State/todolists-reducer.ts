import React from "react";
import { TodolistType } from "../AppRoot_9";

// type ActionTypes

export const TodolistsReducer = (
  state: TodolistType[],
  action: any
): TodolistType[] => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((t) => t.id != action.id);
    }
    default:
      return state;
  }
};


type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistID: string) => {
  return {
    action: "REMOVE-TODOLIST",
    payload: {
      todolistID,
    },
  } as const;
};
