import React, {useState} from 'react';
import {FullInput, TaskType} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


type FilterType = 'all' | 'completed' | 'active' ;

function App() {
    let [filter, setFilter] = useState<FilterType>('all')
    let [tasks, setTasks] = useState<Array<TaskType>>([
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

    let taskForTodolist = tasks;
    if (filter === 'all') {
        return taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        return taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'completed') {
        return taskForTodolist = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">


            <div className='block'>
                <FullInput
                    tasks={taskForTodolist}
                    title='Tasks'
                    removeTask={removeTask}/>
            </div>


            {/*<UseStateComponent1/>*/}
            {/*<UseStateComponent2/>*/}
        </div>
    )
}

export default App;