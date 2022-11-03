import React, {useState} from 'react';

// export const UseStateComponent1 = () => {
//
//     const [count, setCount] = useState(0)
//
//     return (
//         <div >
//             {count}
//             <button onClick={() => setCount(0)} className='buttons'>Reset</button>
//             <button onClick={() => setCount(count => count + 1)} className='buttons'>+</button>
//             <button onClick={() => setCount(count => count - 1)}>-</button>
//         </div>
//     );
// };


export const UseStateComponent2 = () => {
    return (
        <div>
            <div>
                <h4>Иван Иванов</h4>
                <div>10</div>
                <button>+</button>
            </div>
            <hr/>
            <div>
                <h4>Петр Петров</h4>
                <div>10</div>
                <button>+</button>
            </div>
            <hr/>
            <button>-</button>
        </div>
    )
}