import React from 'react';
import {ToDolist} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";

function App() {

    let tasks = [
        {id: 1, title: 'HTML&CSS', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: true},
        {id: 4, title: 'SQL', isDone: false},
        {id: 5, title: 'MongoBD', isDone: true},
        {id: 6, title: 'English', isDone: false}
    ]


    return (
        <div className="App">
            <div className='block'>
                <ToDolist title='Technologies' tasks={tasks}/>
            </div>
        </div>
    )
}

export default App;