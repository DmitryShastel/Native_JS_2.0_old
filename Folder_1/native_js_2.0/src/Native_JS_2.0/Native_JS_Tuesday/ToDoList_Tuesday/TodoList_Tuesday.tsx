import React from 'react';
import {TaskType} from "./App_Root_Tuesday";
import {AddItemFormTuesday} from "./AddItemForm_Tuesday";

type ToDoListType = {
    tdTitle: string
    tasks: TaskType[]
}


export const TodoListTuesday = (props: ToDoListType) => {
    return (
        <div>
            <h3>{props.tdTitle}</h3>
            <AddItemFormTuesday/>

            {
                props.tasks.map((task) => {
                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>
                            <li><input type='checkbox'/>
                                {task.title}
                                <button>X</button>
                            </li>
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