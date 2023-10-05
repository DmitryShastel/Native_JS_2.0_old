import React, {ChangeEvent, useState} from 'react';
import {TaskType} from "./App_Root_Tuesday";

type ToDoListType = {
    // tdTitle: string
    tasks: TaskType[]
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
}


export const TodoListTuesday = (props: ToDoListType) => {

    const [title, setTitle] = useState('')

    const addTaskTitleHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId)
    }

    return (
        <div>
            <h3>What to learn</h3>
            <input
                type='text'
                onChange={onChangeTaskTitleHandler}
                value={title}/>
            <button onClick={addTaskTitleHandler}>+
            </button>

            {
                props.tasks.map((task) => {
                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>
                            <li><input type='checkbox'/>
                                {task.title}
                                <button onClick={() => {
                                    removeTaskHandler(task.id)
                                }}>X
                                </button>
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