import React from 'react';
import {FilterType} from "../../../App";


export type NewComponentType = {
    money: Array<MoneyType>
    filterForMoney: (value: FilterType) => void
}

export type MoneyType = {
    banknots: string
    value: number
    number: string
}


export const NewComponent = (props: NewComponentType) => {


    return (
        <div>
            <ul>
                {props.money.map((m, index) => {
                    return (
                        <li >
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.filterForMoney('All')}>All</button>
            <button onClick={() => props.filterForMoney('Dollars')}>Dollars</button>
            <button onClick={() => props.filterForMoney('RUBLS')}>Rubuls</button>

        </div>
    );
};
