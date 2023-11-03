import React from 'react';
import {SuperButton} from "./SuperButton";
import './Counter_2.0Styles.css'



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
                <span className={props.counter === 5 ? 'error-color' : ''}>{props.counter} </span>
            </div>
            <SuperButton title='inc' callback={incHandler} className={props.counter === 5 ? 'disabled-inc' : ''}/>
            <SuperButton title='reset' callback={resetHandler} className={props.counter === 0 ? 'disabled-reset' : ''}/>
        </div>
    );
};