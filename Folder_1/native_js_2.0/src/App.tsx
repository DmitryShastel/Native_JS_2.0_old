import React, {useState} from 'react';
import {Input} from "./Native_JS_2.0/Native_JS_Monday/Input";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div className="App">
            <Input/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    )
}

export default App;
