import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from "./Native_JS_2.0/Native_JS_Monday/ToDoList/ToDoList";
import {v1} from "uuid";


type FilterType = 'All' | 'Active' | 'Completed'

export function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterType>('All')

    let filteredTask = tasks
    if(filter === 'Active') {
        filteredTask.filter(t => t.isDone === false)
    }
    if(filter === 'Completed'){
        filteredTask.filter(t => t.isDone === true)
    }



    const removeTask = (id: string) => {
        let removedTask = tasks.filter(t => t.id !== id)
        setTasks(removedTask)
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }


    return (
        <div className="App">
            <ToDoList
                title={'What to learn'}
                tasks={filteredTask}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}



