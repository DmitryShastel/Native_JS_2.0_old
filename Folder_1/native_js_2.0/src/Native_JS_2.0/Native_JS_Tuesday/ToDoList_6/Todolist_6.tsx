import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./AppRoot_6";
import {AddItemForm} from "./AddItemForm";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTasks: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    filter:FilterValuesType
}

export function Todolist_6(props: PropsType) {

    const onAllClickHander = () => {
        props.changeFilter("all", props.id)
    }
    const onActiveClickHander = () => {
        props.changeFilter("active", props.id)
    }
    const onCompletedClickHander = () => {
        props.changeFilter("completed", props.id)
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = (newTitle: string) => {

        return props.addTask(newTitle, props.id)
    }


    return (
        <div>
            <h3>{props.title}  <button onClick={removeTodolist}>x</button></h3>

            <AddItemForm callBack={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map(t => {

                        const onClickHandler = () => {
                            props.removeTasks(t.id, props.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeStatus(t.id, newIsDoneValue, props.id)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={onChangeHandler}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>X
                            </button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button
                    className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHander}>
                    All
                </button>
                <button
                    className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHander}>Active
                </button>
                <button
                    className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHander}>Completed
                </button>
            </div>
        </div>
    )
}


