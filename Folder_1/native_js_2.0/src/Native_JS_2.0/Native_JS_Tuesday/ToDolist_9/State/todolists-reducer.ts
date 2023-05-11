import React from "react";
import { TodolistType } from "../AppRoot_9";

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

export const removeTodolistAC = (todolistID: string) => {
  return {
    action: "REMOVE-TODOLIST",
    id: todolistID,
  };
};
