import React from "react";
import {useSelector, shallowEqual} from "react-redux";

let renderCount = 0;

export const MethodThree = () => {
    // Method: Object destructuring inside the arrow function
    //@ts-ignore
    const { firstCounter  } = useSelector<RootState>((state) => ({
        firstCounter: state.storeReducer.counters.firstCounter
    }), shallowEqual);
    console.log("render MethodThree");
    console.log(firstCounter);

    renderCount += 1;

    return (
        <div>
            <p>{`firstCounter: ${firstCounter}`}</p>
            <p>{`renders: ${renderCount}`}</p>
        </div>
    );
};