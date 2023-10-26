import React, {ChangeEvent, useState, useRef} from 'react';
import {FilterType, TaskType} from "./App_Root_Tuesday";
import './ToDoList_Tuesday.css';

type ToDoListType = {
    todolistId: string
    title: string
    tasks: TaskType[]
    addTask: (todolistId: string, newTaskTitle: string) => void
    removeTask: (todolistId: string, taskId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, title: string) => void
    changeFilter: (todolistId: string, value: FilterType) => void
    removeTodolist: (todolistId: string) => void
}


export const TodoListTuesday = (props: ToDoListType) => {

    // const [title, setTitle] = useState('')
    // const [editingTaskId, setEditingTaskId] = useState('')
    // const [error, setError] = useState('')
    // const inputRef = useRef<HTMLInputElement>(null);
    // const hasError = title.trim() === '' && error !== ''

    // const addTaskTitleHandler = () => {
    //     if (title.trim() === '') {
    //         setError('Please enter a task title')
    //         return
    //     }
    //     props.addTask(props.todolistId, title)
    //     setTitle('')
    //     setError('')
    // }
    // const onChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    //change task title
    // const changeTaskTitleHandler = (taskId: string, newTitle: string) => {
    //     if (newTitle.trim() !== '') {
    //         props.changeTaskTitle(taskId, newTitle)
    //     }
    // }
    // const startEditingTask = (taskId: string) => {
    //     setEditingTaskId(taskId)
    // }
    // const stopEditingTask = () => {
    //     setEditingTaskId('');
    // }

    //filter tasks
    const filterAllTasks = () => {
        props.changeFilter(props.todolistId, 'All')
    }
    const filterActiveTasks = () => {
        props.changeFilter(props.todolistId, 'Active')
    }
    const filterCompletedTasks = () => {
        props.changeFilter(props.todolistId, 'Completed')
    }


    return (
        <div>

            <h3>{props.title}
                <button onClick={removeTodolistHandler}>X</button>
            </h3>

            <input
                // type='text'
                // onChange={onChangeTaskTitleHandler}
                // value={title}
                // onBlur={() => {
                //     if (title.trim() === '') {
                //         setError('Please enter a task title')
                //     } else {
                //         setError('')
                //     }
                // }}
                // className={hasError ? 'input-error' : ''}
            />


            {/*<button onClick={addTaskTitleHandler}>+</button>*/}
            {/*{error && <p className="error-text">{error}</p>}*/}

            {
                props.tasks.map((task) => {

                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(props.todolistId, task.id, newIsDoneValue)
                    }

                    const removeTaskHandler = () => {
                        props.removeTask(props.todolistId, task.id)
                    }

                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>
                            <li><input
                                checked={task.isDone}
                                type='checkbox'
                                onChange={changeTaskStatusHandler}
                            />

                                {task.title}

                                {/*<li>*/}
                                {/*    // type='text'*/}
                                {/*    value={task.title}*/}
                                {/*    // onChange={(e) => changeTaskTitleHandler(task.id, e.target.value)}*/}
                                {/*    // onDoubleClick={() => startEditingTask(task.id)}*/}
                                {/*    // onBlur={stopEditingTask}*/}
                                {/*    autoFocus*/}
                                {/*/>*/}

                                <button onClick={removeTaskHandler}>X</button>
                            </li>
                        </ul>
                    )
                })
            }
            <button onClick={filterAllTasks}>All</button>
            <button onClick={filterActiveTasks}>Active</button>
            <button onClick={filterCompletedTasks}>Completed</button>
        </div>
    );
};