import React from 'react';


type BodyType = {
    bodyTitle:string
}

export const  Body= (props: BodyType) => {
    return (
        <div>
            <h4>{props.bodyTitle}</h4>
        </div>
    );
};
