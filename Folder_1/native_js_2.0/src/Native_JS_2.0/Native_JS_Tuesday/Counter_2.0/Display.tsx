import React from 'react';


type DisplayPropsType = {
    counter: number
    error: string | null
    startValue: number
    maxValue: number
}


export const Display = (props: DisplayPropsType) => {

    let result = props.error === 'Incorrect value' ? 'errorMessage' : ''
    let countColor = props.counter === props.maxValue ? 'countColor' : ''

    return (
        <div>

            {
                props.error
                    ? <span className={result}>{props.error}</span>
                    : <span className={countColor}>{props.counter} </span>
            }

        </div>
    );
};