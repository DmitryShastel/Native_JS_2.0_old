import React, {ChangeEvent, useState} from 'react';
import {FilterType} from "./AppRoot_8";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    filteredTasks: (value: FilterType) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterType
}

export function Todolist_8(props: PropsType) {


    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandlerAddTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }
    const addTask = () => {

        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onAllClickHandler = () => {
        props.filteredTasks('All')
    }
    const onActiveClickHandler = () => {
        props.filteredTasks('Active')
    }
    const onCompletedClickHandler = () => {
        props.filteredTasks('Completed')
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandlerAddTask} className={error ? 'error' : ''}/>
                <button onClick={addTask}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <div>
                <ul>
                    {props.tasks.map((t) => {

                        const onClickHandlerRemove = () => {
                            props.removeTask(t.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                            props.changeStatus(t.id, newIsDoneValue)
                        }

                        return (
                            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                                <input
                                    type='checkbox'
                                    checked={t.isDone}
                                    onChange={onChangeHandler}
                                />
                                <span>{t.title}</span>
                                <button onClick={onClickHandlerRemove}>x</button>
                            </li>
                        )
                    })}

                </ul>
            </div>
            <button className={props.filter === 'All' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'Active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'Completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    );
 }