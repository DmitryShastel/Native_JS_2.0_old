import React from 'react';


type ButtonType = {
    name: string
    callback: (id: number) => void
}


export const Button = () => {
    return (
        <button>+</button>
    );
};

