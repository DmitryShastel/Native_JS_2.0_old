import React from 'react';


export const Js10 = () => {

    const identity = <T, >(value: T): T => {
        return (value)
    }

    console.log(identity<number[]>([1]))

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

