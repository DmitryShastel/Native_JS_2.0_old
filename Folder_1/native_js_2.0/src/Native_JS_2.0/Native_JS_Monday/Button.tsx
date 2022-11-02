import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}


export const Button = (props: ButtonType) => {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};