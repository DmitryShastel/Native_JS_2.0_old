import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListType = {
    task: Array<TaskType>
    title: string
    removeTask: (id: number) => void
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
                        const onClickHandlerRemove = () => {
                            props.removeTask(t.id)
                        }
                        return (
                            <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={onClickHandlerRemove}>x</button>
                            </li>
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