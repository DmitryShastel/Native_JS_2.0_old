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

            <button>inc</button>
            <button>reset</button>
        </div>
    );
};