import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAC, CustomerType, removeCustomerAC} from "../reducers/reducers";

type InterfaceType = {
    addCustomer: (cash: number) => void
}

export const Interface = () => {



    const dispatch = useDispatch()
    const cash : any = useSelector<any>((state) => state.cash.cash)
    const customers: any = useSelector<any>(state => state.customers.customers)


    let addMoney = (cash: number) => {
         dispatch({type: 'ADD-MONEY', payload: cash})
    }

    let getMoney = (cash: number) => {
        dispatch({type:'GET-MONEY', payload: cash})
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
            <div>Balance: {cash}</div>
            <div>
                <button onClick={() => {addMoney(Number(prompt()))}}>Add money</button>
                <button onClick={() => {getMoney(Number(prompt()))}}>Get Money</button>
                <button onClick={() => {addCustomer(prompt())}}>Add customer</button>
            </div>

                {customers.length > 0 ?
                    <div>{
                        customers.map((c: any) => <div
                            onClick={() => {removeCustomer(c)}}
                            style={{border: '1px solid red'}}>{c.name}</div>)}
                    </div>
                    : <div>'The client is missed' </div>}
        </div>
    )
}

