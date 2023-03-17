import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAC, addMoneyAC, CustomerType, getMoneyAC, removeCustomerAC} from "../reducers/reducers";
import {store} from "../redux/redux-store";


export const Interface = () => {

    const dispatch = useDispatch()
    const cash: any  = useSelector<typeof store>((state) => state.cash.cash)
    const customers: any = useSelector<typeof store>(state => state.customers.customers)


    let addMoney = (cash: number) => {
        //dispatch({type: 'ADD-MONEY', payload: cash})
        dispatch(addMoneyAC(cash))
    }

    let getMoney = (cash: number) => {
        //dispatch({type:'GET-MONEY', payload: cash})
        dispatch(getMoneyAC(cash))
    }

     let addCustomer = (name: any) => {
         let customer = {
             name,
             id: Date.now()
         }
        dispatch(addCustomerAC(customer))
         //dispatch({type: 'ADD-CUSTOMER', payload: customer})
    }

    let removeCustomer = (customer: CustomerType) => {
        //dispatch({type: 'REMOVE-CUSTOMER', payload: customer.id})
        dispatch(removeCustomerAC(customer.id))
    }


    return (

        <div>
            <div>
                <h3>Balance: {cash}</h3>
            </div>
            <div>
                <button onClick={() => {addMoney(Number(prompt()))}}>Add money</button>
                <button onClick={() => {getMoney(Number(prompt()))}}>Get Money</button>
                <button onClick={() => {addCustomer(prompt())}}>Add customer</button>
            </div>

                {customers.length > 0 ?
                    <div>{
                        customers.map((c: any) => <div
                            onClick={() => {removeCustomer(c)}}
                            >{c.name}</div>)}
                    </div>
                    : <div>'The client is missed' </div>}
        </div>
    )
}

