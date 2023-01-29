import React from 'react';

type CounterType = {
    counter: number
}


export const Counter = (props: CounterType) => {

    return (
        <div>
            <div>
                <span>{props.counter}</span>
            </div>

            <button onClick={() => {}}>inc</button>
            <button onClick={() => {}}>reset</button>
        </div>
    );
};