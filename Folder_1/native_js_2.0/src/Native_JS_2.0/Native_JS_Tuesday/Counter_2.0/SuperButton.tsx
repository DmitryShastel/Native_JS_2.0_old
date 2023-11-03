import React from 'react';

type SuperButtonType = {
    title: string
    callback: () => void
    className?: string
}



export const SuperButton = (props: SuperButtonType) => {
    return (
        <div>
            <button className={props.className} onClick={props.callback}>{props.title}</button>
        </div>
    );
};