import React from "react";
import { useSelector } from "react-redux";
import {store} from "../store";

let renderCount = 0;

export const MethodThree = () => {
    // Method: Object destructuring inside the arrow function
    //@ts-ignore
    const { firstCounter  } = useSelector<RootState>((state) => ({
        firstCounter: state.storeReducer.counters.firstCounter
    }));
    console.log("render MethodThree");

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};