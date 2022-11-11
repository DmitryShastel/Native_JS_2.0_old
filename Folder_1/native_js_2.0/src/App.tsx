import React from 'react';
import {ToDolist} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";

function App() {

    let tasks = [
        {id: 1, title: 'HTML&CSS', idDone: false},
        {id: 2, title: 'JS', idDone: true},
        {id: 3, title: 'React', idDone: true},
        {id: 4, title: 'SQL', idDone: false},
        {id: 5, title: 'MongoBD', idDone: true},
        {id: 6, title: 'English', idDone: false}
    ]


    return (
        <div className="App">
            <div className='block'>
                <ToDolist title='Technologies'/>
            </div>
        </div>
    )
}

export default App;