import React, {useState} from 'react';


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div className="App">
            <div className='block'>
                <input/>
                <button>+</button>
            </div>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    )
}

export default App;
