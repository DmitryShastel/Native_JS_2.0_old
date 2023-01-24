import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "../../../App";


type CountryPropsType = {
    data: any
    setFilterValue: any
    moneyFilter: (value: BanknotsType) => void
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        // засетаем 'All'
    }

    const setDollars = () => {
        // засетаем 'Dollars'
    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
    }

    return (
        <div>
            <button onClick={()=>{'засетаем All'}}>All</button>
            <button onClick={()=>{'засетаем Dollars'}}>Dollars</button>
            <button onClick={()=>{'засетаем RUBLS'}}>RUBLS</button>
            <City data={"передаем денюжки в город"}/>
        </div>
    );
};

