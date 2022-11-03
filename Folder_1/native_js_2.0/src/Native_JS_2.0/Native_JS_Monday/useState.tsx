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
    let [count1, setCount1] = useState(10)
    let [count2, setCount2] = useState(10)

    return (
        <div>
            <div>
                <h4>Иван Иванов</h4>
                <div>{count1}</div>
                <button onClick={() => setCount1(count1 => count1 + 1)}>+</button>
            </div>
            <hr/>
            <div>
                <h4>Петр Петров</h4>
                <div>{count2}</div>
                <button onClick={() => setCount2(count2 => count2 + 1)}>+</button>
            </div>
            <hr/>
            <button onClick={() => {
                setCount1(count1 => count1 - 1)
                setCount2(count2 => count2 - 1)
            }}>
                -
            </button>
        </div>
    )
}