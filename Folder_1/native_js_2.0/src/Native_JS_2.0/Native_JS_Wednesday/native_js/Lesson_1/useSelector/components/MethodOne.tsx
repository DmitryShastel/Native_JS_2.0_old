import React from "react";
import { useSelector } from "react-redux";
import {store} from '../store'
import {RootState} from "../reducers/storeReducers";

let renderCount = 0;


export const MethodOne = () => {
    debugger

    const firstCounter = useSelector<RootState>((state) => state.storeReducer.counters.firstCounter);
    console.log("render MethodOne");

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};