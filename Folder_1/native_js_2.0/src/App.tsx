import React, {ChangeEvent, useState} from 'react';
import {Fullinput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";
import {Input} from "./Native_JS_2.0/Native_JS_Monday/Input";
import {Button} from "./Native_JS_2.0/Native_JS_Monday/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    return (
        <div className="App">
            <Fullinput/>
            <div className='block'>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message} </div>
                    )
                })}
            </div>

        </div>
    )
}

export default App;