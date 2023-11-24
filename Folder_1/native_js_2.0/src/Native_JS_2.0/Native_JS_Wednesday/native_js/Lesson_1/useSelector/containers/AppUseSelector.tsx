import React from "react";
import { useDispatch } from "react-redux";
import {MethodOne} from "../components/MethodOne";
import {MethodTwo} from "../components/MethodTwo";
import {MethodThree} from "../components/MethodThree";
import {IncrementFirstAC} from "../reducers/storeReducers2";

export const AppUseSelector = () => {
    const dispatch = useDispatch();
    return (
        <div>
            {/*<button onClick={() => dispatch({ type: "INC_FIRST" })}>inc first</button>*/}
            <button onClick={() => dispatch(IncrementFirstAC())}>inc first</button>
            <button onClick={() => dispatch({ type: "INC_SECOND" })}>
                inc second
            </button>
            <p>
                <strong>MethodOne</strong>
            </p>
            <MethodOne />
            <p>
                <strong>MethodTwo</strong>
            </p>
            <MethodTwo />
            <p>
                <strong>MethodThree</strong>
            </p>
            <MethodThree />
        </div>
    );
};