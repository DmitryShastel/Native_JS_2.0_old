import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DefaultStateType} from "../reducers/reducers";


export const Interface = () => {

    const dispatch = useDispatch()
    const cash = useSelector<DefaultStateType, number>(state => state.cash)
    console.log(cash)

    let addMoney = (cash: number) => {
         dispatch({type:'ADD_MONEY', payload: cash})
    }

    let getMoney = (cash: number) => {
        dispatch({type:'GET_MONEY', payload: cash})
    }

    return (
        <div>
            <div>{cash}</div>
            <button onClick={() => {addMoney(Number(prompt()))}}>Add money</button>
            <button onClick={() => {getMoney(Number(prompt()))}}>Get Money</button>
        </div>
    )
}