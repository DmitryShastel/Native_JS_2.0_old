import React from 'react';

type ButtonType = {
    name: string
}


export const Button = (props: ButtonType) => {
    return (
        <div>
            <button>{props.name}</button>
        </div>
    );
};

