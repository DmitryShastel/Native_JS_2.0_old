import React from 'react';

type SuperButtonType = {
    title: string
    callback: () => void
    className?: string
    disabled: boolean
}


export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>
            <button
                className={`button ${props.disabled === true ? 'disabled' : ''}`}
                onClick={props.callback}
            >{props.title}</button>
        </div>
    );
};