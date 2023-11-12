import React from 'react';

type DisplayPropsType = {
    counter: number
    error: string | null
    startValue: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {

     let result = props.error === 'Incorrect value' ? 'errorMessage' : '';
     let resultColor = props.counter === props.maxValue ? 'resultColor' : ''

    return (
        <div>
            {
                props.error
                    ? <span className={result}>{props.error}</span>
                    : <span className={resultColor}>{props.counter} </span>
            }
        </div>
    );
};