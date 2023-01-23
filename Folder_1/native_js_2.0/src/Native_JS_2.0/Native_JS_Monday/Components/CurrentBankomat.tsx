import React from 'react';
import {MoneyType} from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <div>
            {props.money.banknotes}
        </div>
    );
};
