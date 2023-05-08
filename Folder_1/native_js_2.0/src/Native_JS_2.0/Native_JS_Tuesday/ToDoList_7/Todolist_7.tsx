import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./AppRoot_7";
import {AddItemForm7} from "./AddItemForm7";
import {EditableSpan7} from "./EditableSpan7";
import IconButton from '@mui/material/IconButton';
import {Delete} from "@material-ui/icons";
import Button from "@mui/material/Button";


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
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                            props.changeStatus(t.id, newIsDoneValue, props.id)
                        }


                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input type='checkbox' onChange={onChangeHandler}checked={t.isDone}/>
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
                <Button
                    variant={props.filter === 'all' ? 'contained' : "outlined"}
                    color='warning'
                    //className={props.filter === 'all' ? {variant:'outlined'} : ""}
                    onClick={onAllClickHander}>
                    All
                </Button>
                <Button
                    variant={props.filter === 'active' ? "contained" : "outlined"}
                    color='secondary'
                    //className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHander}>Active
                </Button>
                <Button
                    variant={props.filter === 'completed' ? "contained" : "outlined"}
                    color='error'
                    //className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHander}>Completed
                </Button>
            </div>
        </div>
    )
}


