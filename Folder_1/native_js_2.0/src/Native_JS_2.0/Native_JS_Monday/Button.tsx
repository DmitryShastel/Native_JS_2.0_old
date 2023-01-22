import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    const onclickHandler = () => {

    }

    return (
        <button onClick={onclickHandler}>{props.name}</button>
    );
};