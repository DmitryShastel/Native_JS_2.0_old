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
                    {props.task.map((t) => {
                        return (
                            <li key={t.id}><input type='checkbox' checked={t.isDone}/><span>{t.title}</span></li>
                        )
                    })}

                </ul>
            </div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}