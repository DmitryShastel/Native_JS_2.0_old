import React from 'react';

type HeaderType = {
    headerTitle: string
}


export const Header = (props: HeaderType) => {
    return (
        <div>
            <h3>{props.headerTitle}</h3>
        </div>
    );
};

