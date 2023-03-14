import React from 'react';
import {useDispatch, useSelector} from "react-redux";


export const Interface = () => {

    const dispatch = useDispatch()
    const cash : any = useSelector<any>((state) => state.cash.cash)
    const customers: any = useSelector<any>(state => state.customers.customers)


    let addMoney = (cash: number) => {
         dispatch({type:'ADD_MONEY', payload: cash})
    }

    let getMoney = (cash: number) => {
        dispatch({type:'GET_MONEY', payload: cash})
    }

    let addCustomer = (name: any) => {

    }

    let removeCustomer = (name: any) => {

    }


    return (
        <div>
            <div>{cash}</div>
            <div>{customers}</div>
            <button onClick={() => {addMoney(Number(prompt()))}}>Add money</button>
            <button onClick={() => {getMoney(Number(prompt()))}}>Get Money</button>
            <button onClick={() => {addCustomer(Number(prompt()))}}>Add customer</button>
            <button onClick={() => {removeCustomer(Number(prompt()))}}>Remove customer</button>

            <div>
                {customers.length > 0 ?
                    <div>{customers.map(customer => <div>{customer}</div>)}</div>
                    : <div>'The client is missed' </div>}

            </div>
        </div>
    )
}