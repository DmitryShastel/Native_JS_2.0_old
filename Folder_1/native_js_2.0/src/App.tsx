import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/ToDoList/ToDoList";


function App() {

    let [task, setTask] = useState('')

    return (
        <div className="App">
            <ToDoList/>
        </div>
    );
}


export default App;
