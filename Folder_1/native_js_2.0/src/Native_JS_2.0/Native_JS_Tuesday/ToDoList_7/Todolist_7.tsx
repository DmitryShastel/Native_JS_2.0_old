import React from 'react';
import {FilterValuesType} from "./AppRoot_7";
import {AddItemForm7} from "./AddItemForm7";
import {EditableSpan7} from "./EditableSpan7";
import IconButton from '@mui/material/IconButton';
import {Delete} from "@material-ui/icons";


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
    filter: FilterValuesType
    updateTask: (todolistId: string, taskId: string, updateTitle: string) => void
    updateTodolistTitle: (todolistId: string, updateTitle: string) => void
}

export function Todolist_7(props: PropsType) {

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

    const updateTodolistTitleHandler = (updateTitle: string) => {
        props.updateTodolistTitle(props.id, updateTitle)
    }


    const updateTaskHandler = (taskID: string, updateTitle: string) => {
        props.updateTask(props.id, taskID, updateTitle)
    }


    return (
        <div>
            <h3>
                <EditableSpan7 oldTitle={props.title} callback={updateTodolistTitleHandler}/>
                <IconButton onClick={removeTodolist} size="small">
                    <Delete color='secondary' />
                </IconButton>
                {/*<button onClick={removeTodolist}>x</button>*/}
            </h3>

            <AddItemForm7 callBack={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map(t => {

                        const onClickHandler = () => {
                            props.removeTasks(t.id, props.id)
                        }


                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <EditableSpan7 oldTitle={t.title}
                                           callback={(updateTitle) => updateTaskHandler(t.id, updateTitle)}/>

                            <IconButton onClick={onClickHandler} size="small">
                                <Delete color='secondary' />
                            </IconButton>
                            {/*<button onClick={onClickHandler}>X*/}
                            {/*</button>*/}
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


