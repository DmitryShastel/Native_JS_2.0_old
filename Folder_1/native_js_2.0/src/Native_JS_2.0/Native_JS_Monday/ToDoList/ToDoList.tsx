import React, {ChangeEvent, useState} from 'react';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    tasks: Array<TaskType>
    title: string
    removeTask: (id: string) => void
    addTask: (title: string) => void
}

export const ToDoList = (props: TodoListType) => {
    let [title, setTitle] = useState('')

    let onChangeHandlerAddTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

        const addTask = () => {
            props.addTask(title)
            setTitle('')
        }


        return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={title} onChange={onChangeHandlerAddTask}/>
                    <button onClick={addTask}>+</button>
                </div>
                <div>
                    <ul>
                        {props.tasks.map((t) => {
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

