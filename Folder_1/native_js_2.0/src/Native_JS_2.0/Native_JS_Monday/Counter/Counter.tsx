import React from 'react';

export type CounterType = {
    counter: number
    inc: () => void
    reset: () => void
}


export const Counter = (props: CounterType) => {

    let incHandler = () => {
        props.inc()
    }
    let resetHandler = () => {
        props.reset()
    }


    return (
        <div>
            <div>
                <span className={props.counter === 5 ? 'error-color' : ''}>{props.counter}</span>
            </div>
            <button onClick={incHandler} className={props.counter === 5 ? 'disabled-inc' : ''}>inc</button>
            <button onClick={resetHandler} className={props.counter === 0 ? 'disabled-reset' : ''} >reset</button>
        </div>
    );
};