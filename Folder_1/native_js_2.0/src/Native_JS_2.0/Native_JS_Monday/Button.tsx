import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    const onclickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onclickHandler}>{props.name}</button>
    );
};