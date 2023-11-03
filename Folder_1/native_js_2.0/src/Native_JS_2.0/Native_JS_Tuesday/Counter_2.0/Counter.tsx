import React from 'react';
import {SuperButton} from "./SuperButton";


type CounterType = {
    counter: number
    inc: () => void
    reset: () => void
}


export const Counter_2_0 = (props: CounterType) => {


    let incHandler = () => {
        props.inc()
    }
    let resetHandler = () => {
        props.reset()
    }


    return (
        <div>
            <div>
                <span>{props.counter} </span>
            </div>
            <SuperButton title='inc' callback={incHandler}/>
            <SuperButton title='reset' callback={resetHandler}/>
        </div>
    );
};