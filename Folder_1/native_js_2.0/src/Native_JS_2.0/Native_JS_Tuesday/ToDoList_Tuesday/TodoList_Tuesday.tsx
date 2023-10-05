import React from 'react';
import {TaskType} from "./App_Root_Tuesday";

type ToDoListType = {
    tdTitle: string
    tasks: TaskType[]
}


export const TodoListTuesday = (props: ToDoListType) => {
    return (
        <div>
            <h3>{props.tdTitle}</h3>
            {
                props.tasks.map((task) => {
                    return (
                        <ul>
                            <li>{task.title}</li>
                        </ul>
                    )
                })
            }
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
};