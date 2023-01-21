import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

