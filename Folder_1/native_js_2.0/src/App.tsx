import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [task, setTask] = useState([
        { name: 'htm & css'},
        { name: 'js'},
        { name: 'react'},
        { name: 'sql'},
        { name: 'git'},
        { name: 'typescript'}

    ])

    const addNewTask = (title: string) => {
        let newTitle = { name: title}
        setTask([newTitle, ...task])
    }

    return (
        <div className="App">


            <FullInput addNewTask={addNewTask}/>


            <div className='block'>
                {task.map((t, index) => {
                    return (
                        <div key={index}>{t.name} </div>
                    )
                })}
            </div>


            {/*<UseStateComponent1/>*/}
            {/*<UseStateComponent2/>*/}
        </div>
    )
}

export default App;