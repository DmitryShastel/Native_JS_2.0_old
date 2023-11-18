import React from "react";
import { useSelector } from "react-redux";
import {store} from "../store";
import {RootState} from "../reducers/storeReducers";

let renderCount = 0;

export const MethodTwo = () => {
    // Method: One per selector
    const firstCounter = useSelector<RootState>((state) => state.storeReducer.counters.firstCounter);
    console.log("render MethodTwo");

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};