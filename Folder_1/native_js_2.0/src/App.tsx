import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/ToDoList/ToDoList";


function App() {

    let [task, setTask] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TypeScript', isDone: false}
    ])

    return (
        <div className="App">
            <ToDoList/>
        </div>
    );
}


export default App;
