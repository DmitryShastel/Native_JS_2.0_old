import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {defaultState, DefaultStateType} from "../reducers/reducers";


export const Interface = ( ) => {
     let state = defaultState

    const dispatch = useDispatch()
    const cash = useSelector(state => defaultState.cash)
    console.log(cash)

    return (
        <div>
            <button>Add money</button>
            <button>Get Money</button>
        </div>
    )
}