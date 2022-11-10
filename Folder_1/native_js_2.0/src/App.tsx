import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'message1', isDone: true},
        {id: 2, title: 'message2', isDone: true},
        {id: 3, title: 'message3', isDone: false},
        {id: 4, title: 'message4', isDone: false},
        {id: 5, title: 'message5', isDone: true},

    ])


    let removeTask = (id: number) => {
        let removedTask = tasks.filter(t => t.id !== id)
        setTasks(removedTask)
    }

    return (
        <div className="App">


            <div className='block'>
                <FullInput
                    tasks={tasks}
                    title='Tasks'
                    removeTask={removeTask}/>
            </div>


            {/*<UseStateComponent1/>*/}
            {/*<UseStateComponent2/>*/}
        </div>
    )
}

export default App;