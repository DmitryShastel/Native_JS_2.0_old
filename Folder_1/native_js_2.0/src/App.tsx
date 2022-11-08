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