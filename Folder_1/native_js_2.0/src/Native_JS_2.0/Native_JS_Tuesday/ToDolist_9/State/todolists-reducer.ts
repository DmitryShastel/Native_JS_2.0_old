import React from "react";
import { TodolistType } from "../AppRoot_9";
import { v1 } from "uuid";
import {FilterValuesType } from "../AppRoot_9";

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
   
    case 'CHANGE-TODOLIST-TITLE': {
        // const todolist = state.find(tl => tl.id === action.payload.todolistID);
        // if (todolist) {
        //     todolist.title = action.payload.newTitle;
        //     return [...state];
        // }

        return state.map(el => el.id === action.payload.todolistID ?  {...el, title: action.payload.newTitle} : el)
    }

    case changeFilterAC : {
        return state
    }
    

    default:
      return state;
  }
};

type ActionTypes = removeTodolistACType | addTodolistACType | changeTodolistACType | changeFilterACType;
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
export const changeTodolistAC = (todolistID: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID,
            newTitle
        }
    } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistID: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistID,
            filter
        }
    }
}