import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1', priority: 'high'},
        {message: 'message2', priority: 'middle'},
        {message: 'message3', priority: 'low'}
    ])


    const addMessage = (title: string) => {
        let newMessage = {message: title, priority: ''}
        setMessage([newMessage, ...message])
    }

    return (
        <div className="App">

            <FullInput addMessage={addMessage}/>
            <div className='block'>
                {
                    message.map((el, index) => {
                        return (
                            <div key={index}>{el.message}</div>
                        )
                    })
                }
            </div>


            {/*<UseStateComponent1/>*/}
            {/*<UseStateComponent2/>*/}
        </div>
    )
}

export default App;