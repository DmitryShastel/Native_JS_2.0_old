import React, {useReducer, useState} from 'react';
import {v1} from "uuid";
import {Todolist_8} from "./Todolist_8";
import {addTaskAC, removeTaskAC, TaskReducer} from "./reducers/taskReducer";


export type FilterType = 'All' | 'Active' | 'Completed'

export const AppRoot_8 = () => {
    // let [tasks, setTasks] = useState<Array<TaskType>>([
    //     {id: v1(), title: 'HTML&CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'React', isDone: false},
    //     {id: v1(), title: 'TypeScript', isDone: false}
    // ])


    let [tasks, taskDispatch] = useReducer(TaskReducer, [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterType>('All')

    let taskForToDoList = tasks
    if (filter === 'Active') {
        taskForToDoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'Completed') {
        taskForToDoList = tasks.filter(t => t.isDone === true)
    }


    const removeTask = (id: string) => {
        taskDispatch(removeTaskAC(id))
        // let removedTask = tasks.filter(t => t.id !== id)
        // setTasks(removedTask)
    }
    const addTask = (title: string) => {
        taskDispatch(addTaskAC(title))
        // let newTask = {id: v1(), title: title, isDone: false}
        // setTasks([newTask, ...tasks])
    }
    const filteredTasks = (value: FilterType) => {
        setFilter(value)
    }

    const changeStatus = (id: string, isDone: boolean) => {
        // let task = tasks.find(t => t.id === id)
        // if (task) {
        //     task.isDone = isDone
        //     setTasks([...tasks])
        // }
    }

    return (
        <Todolist_8
            title={'What to learn'}
            tasks={taskForToDoList}
            removeTask={removeTask}
            addTask={addTask}
            filteredTasks={filteredTasks}
            changeStatus={changeStatus}
            filter={filter}
        />
    )

}


