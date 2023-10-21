import React, {ChangeEvent, useState, useRef} from 'react';
import {TaskType} from "./App_Root_Tuesday";

type ToDoListType = {
    // tdTitle: string
    tasks: TaskType[]
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
    changeTaskStatus: (taskId: string) => void
    changeTaskTitle: (taskId: string, title: string) => void
}


export const TodoListTuesday = (props: ToDoListType) => {

    const [title, setTitle] = useState('')
    const [editingTaskId, setEditingTaskId] = useState('')
    const [filter, setFilter] = useState('All')
    const inputRef = useRef<HTMLInputElement>(null);

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
    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        props.changeTaskStatus(taskId)
    }

    //change task title
    const changeTaskTitleHandler = (taskId: string, newTitle: string) => {
        if (newTitle.trim() !== '') {
            props.changeTaskTitle(taskId, newTitle)
        }
    }
    const startEditingTask = (taskId: string) => {
        setEditingTaskId(taskId)
    }
    const stopEditingTask = () => {
        setEditingTaskId('');
    }

    //filter tasks
    const filterAllTasks = () => {
        setFilter('All')
    }
    const filterActiveTasks = () => {
        setFilter('Active')
    }
    const filterCompletedTasks = () => {
        setFilter('Completed')
    }
    let filteredTasks = props.tasks
    if (filter === 'Active') {
        filteredTasks = filteredTasks.filter(task => !task.isDone)
    } else if (filter === 'Completed') {
        filteredTasks = filteredTasks.filter(task => task.isDone)
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
                filteredTasks.map((task) => {
                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>
                            <li><input
                                checked={task.isDone}
                                type='checkbox'
                                onChange={
                                    (event) => changeTaskStatusHandler(event, task.id)
                                }
                            />
                                {editingTaskId === task.id ? (
                                    <input
                                        type='text'
                                        value={task.title}
                                        onChange={(e) => changeTaskTitleHandler(task.id, e.target.value)}
                                        onDoubleClick={() => startEditingTask(task.id)}
                                        onBlur={stopEditingTask}
                                        autoFocus
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                if (inputRef.current) {
                                                    inputRef.current.blur();
                                                }
                                                changeTaskTitleHandler(task.id, e.currentTarget.value);
                                            }
                                        }}
                                        ref={inputRef}
                                    />
                                ) : (
                                    <span
                                        onDoubleClick={() => startEditingTask(task.id)}
                                    >
                                {task.title}
                            </span>
                                )
                                }
                                <button onClick={() => {
                                    removeTaskHandler(task.id)
                                }}>X
                                </button>
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