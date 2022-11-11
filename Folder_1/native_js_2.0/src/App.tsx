import React, {useState} from 'react';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";

export type FilterType = 'all' | 'completed' | 'active'


function App() {
    let [filter, setFilter] = useState('all')
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'React', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'MongoDB', isDone: false},
        {id: 5, title: 'English', isDone: true},
    ])

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    let filterTask = tasks;
    if( filter === 'active'){
        filterTask = tasks.filter(t => t.isDone === false)
    }
    if( filter === 'completed'){
        filterTask = tasks.filter(t => t.isDone === true)
    }

    const filteredTask = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <div className='block'>
                <ToDoList
                    title='Technologies'
                    tasks={filterTask}
                    removeTask={removeTask}
                    filteredTask={filteredTask}/>
            </div>

        </div>
    )
}

export default App;