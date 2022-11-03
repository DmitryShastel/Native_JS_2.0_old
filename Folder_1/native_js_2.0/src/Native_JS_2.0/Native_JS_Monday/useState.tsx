import React, {useState} from 'react';

export const UseStateComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <div >
            {count}
            <button onClick={() => setCount(0)} className='buttons'>Reset</button>
            <button onClick={() => setCount(count => count + 1)} className='buttons'>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
        </div>
    );
};

