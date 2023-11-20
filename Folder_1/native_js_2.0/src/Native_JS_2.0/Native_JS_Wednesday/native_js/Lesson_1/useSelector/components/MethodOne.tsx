import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/storeReducers";

let renderCount = 0;


export const MethodOne = () => {
    //@ts-ignore
    //const {firstCounter} = useSelector<RootState>((state) => state.storeReducer.counters);
    const {firstCounter} = useSelector<RootState>((state) => state.storeReducer.counters);
    console.log("render MethodOne");
    console.log({firstCounter});

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};