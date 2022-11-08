import React, {useState} from 'react';
import {FullInput} from "./Native_JS_2.0/Native_JS_Monday/Fullinput";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    return (
        <div className="App">

            <FullInput/>
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