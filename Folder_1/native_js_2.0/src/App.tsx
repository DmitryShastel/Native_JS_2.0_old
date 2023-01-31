import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/ToDoList/ToDoList";
import {v1} from "uuid";



export function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: false}
    ])

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
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}



