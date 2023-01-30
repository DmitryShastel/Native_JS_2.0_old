import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListType = {
    task: Array<TaskType>
    title: string
}

export const ToDoList = (props: TodoListType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>
                <ul>
                    <li> <input type='checkbox' checked={true}/><span>HTML&CSS</span></li>
                    <li> <input type='checkbox' checked={true}/><span>JS</span></li>
                    <li> <input type='checkbox' checked={false}/><span>React</span></li>
                    <li> <input type='checkbox' checked={false}/><span>TypeScript</span></li>
                </ul>
            </div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}