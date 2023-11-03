import React from 'react';

type SuperButtonType = {
    title: string
    callback: () => void
}



export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>
            <button onClick={props.callback}>{props.title}</button>
        </div>
    );
};