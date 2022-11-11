import React, {useState} from 'react';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'React', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'MongoDB', isDone: false},
        {id: 5, title: 'English', isDone: true},
    ])


    return (
        <div className="App">
            <div className='block'>
                <ToDoList title='Technologies' tasks={tasks}/>
            </div>

        </div>
    )
}

export default App;