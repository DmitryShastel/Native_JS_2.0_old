import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [task, setTask] = useState([
        {id: 1, name: 'htm & css', priority: 'low'},
        {id: 2, name: 'js', priority: 'high'},
        {id: 3, name: 'react', priority: 'middle'},
        {id: 4, name: 'sql', priority: 'middle'},
        {id: 5, name: 'git', priority: 'low'},
        {id: 6, name: 'typescript', priority: 'high'},

    ])



    return (
        <div className="App">


            <FullInput />




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