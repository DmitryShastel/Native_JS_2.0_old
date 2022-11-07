import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";
import {Button} from "./Native_JS_2.0/Native_JS_Monday/Button";


export type FilterType = 'all' | 'high' | 'middle' | 'low';

function App() {
    let [filter, setFilter] = useState<FilterType>('all')
    let [task, setTask] = useState([
        {id: 1 ,name: 'htm & css', priority: 'low'},
        {id: 2 ,name: 'js', priority: 'high'},
        {id: 3 ,name: 'react', priority: 'middle'},
        {id: 4 ,name: 'sql', priority: 'middle'},
        {id: 5 ,name: 'git', priority: 'low'},
        {id: 6 ,name: 'typescript', priority: 'high'},

    ])

    let listOfTasks = task
    if(filter === 'high') {
        listOfTasks = task.filter( t => t.priority === 'high')
    }
    if(filter === 'middle') {
        listOfTasks = task.filter( t => t.priority === 'middle')
    }
    if(filter === 'low') {
        listOfTasks = task.filter( t => t.priority === 'low')
    }

const changeFilter = (value: FilterType) => {
    setFilter(value);
}

    return (
        <div className="App">
            <FullInput changeFilter={changeFilter}/>
            <Button changeFilter={changeFilter}/>
            <div className='block'>
                {listOfTasks.map((el, index) => {
                    return (
                        <div key={index}>{el.name} </div>
                    )
                })}
            </div>


            {/*<UseStateComponent1/>*/}
            {/*<UseStateComponent2/>*/}
        </div>
    )
}

export default App;