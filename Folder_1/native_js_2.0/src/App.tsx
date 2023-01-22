import React, {useState} from 'react';
import {Input} from "./Native_JS_2.0/Native_JS_Monday/Input";
import {Button} from "./Native_JS_2.0/Native_JS_Monday/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    // let addMessage = (title: string) => {
    //     let newMessage = {message: title}
    //     setMessage([newMessage, ...message])
    //     console.log('title')
    // }

    return (
        <div className="App">

                <Input/>
                <Button name={'Add Message'} callBack={() => {}}/>


            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    )
}

export default App;
