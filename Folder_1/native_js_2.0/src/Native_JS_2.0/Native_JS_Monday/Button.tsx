import React from 'react';
import {FulinputType} from "./Fullinput";




export const Button = (props: FulinputType) => {

    return (
        <div>
            <button onClick={() => {props.changeFilter('all')}}>All</button>
            <button onClick={() => {props.changeFilter('high')}}>High</button>
            <button onClick={() => {props.changeFilter('low')}}>Low</button>
            <button onClick={() => {props.changeFilter('middle')}}>Middle</button>
        </div>

    );
};