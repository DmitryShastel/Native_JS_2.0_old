import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Native_JS_2.0/Native_JS_Monday/Counter/Buttons";


function App() {

    let [counter, setCounter] = useState(0)

    let inc = () => {

    }

    let reset = () => {
    
    }

    return (
        <div className="App">
            <Counter counter={counter}/>
        </div>
    );
}


export default App;
