import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/storeReducers2";

let renderCount = 0;


export const MethodOne = () => {

    //const id = useSelector<RootState>((state) =>  state.storeReducer.testData.id);
    //@ts-ignore
    const firstCounter = useSelector<RootState>((state) => state.storeReducer.counters.firstCounter);

    console.log("render MethodOne");
    //console.log({firstCounter});

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};