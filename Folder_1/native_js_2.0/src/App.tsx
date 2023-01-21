import React, {useState} from 'react';
import {ToDoList} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";
import {OnClick} from "./Native_JS_2.0/Native_JS_Monday/OnClick";
import {Header} from "./Native_JS_2.0/Native_JS_Monday/Components/Header";
import {Body} from "./Native_JS_2.0/Native_JS_Monday/Components/Body";
import {Footer} from "./Native_JS_2.0/Native_JS_Monday/Components/Footer";
import {NewComponent} from "./Native_JS_2.0/Native_JS_Monday/Components/NewComponent";
import {Button} from "./Native_JS_2.0/Native_JS_Monday/Components/Button";

export type FilterType = 'all' | 'completed' | 'active'


function App() {
    let [filter, setFilter] = useState('all')
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'React', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'MongoDB', isDone: false},
        {id: 5, title: 'English', isDone: true},
    ])

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    let filterTask = tasks;
    if (filter === 'active') {
        filterTask = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        filterTask = tasks.filter(t => t.isDone === true)
    }
    const filteredTask = (value: FilterType) => {
        setFilter(value)
    }
    const addTask = (title: string) => {
        let task = {id: 1, title: title, isDone: true};
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }
    let [students, setStudent] = useState([
        {id: 1, name: 'Dima', age: 22},
        {id: 2, name: 'Sacha', age: 21},
        {id: 3, name: 'Alex', age: 19},
    ])



    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])


    const f1 = () => {
        let dolllar = money.filter(m => m.banknots === 'Dollars')
        console.log(dolllar)
    }

    const f2 = (sub: string) => {
        console.log('Vanya')
    }

    const f3 = () => {
        console.log('I am stupid button')
    }

    return (
        <div className="App">
            <div className='block'>
                {/*<ToDoList*/}
                {/*    title='Technologies'*/}
                {/*    tasks={filterTask}*/}
                {/*    removeTask={removeTask}*/}
                {/*    filteredTask={filteredTask}*/}
                {/*    addTask={addTask}/>*/}
                {/*<OnClick/>*/}
                {/*<Header headerTitle={'Header'}/>*/}
                {/*<Body bodyTitle={'Body'}/>*/}
                {/*<Footer footerTitle={'Footer'}/>*/}
                {/*<NewComponent students={students}/>*/}


                <Button name={'MyYouTubeChanel-1'} callback={f1}/>
                <Button name={'MyYouTubeChanel-2'} callback={() => f2('Vanya')}/>
                <Button name={'MyYouTubeChanel-3'} callback={f3}/>
            </div>

        </div>
    )
}

export default App;