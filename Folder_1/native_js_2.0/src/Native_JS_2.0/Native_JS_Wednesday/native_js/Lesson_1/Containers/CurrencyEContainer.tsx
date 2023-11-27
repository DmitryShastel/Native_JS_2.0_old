import React from 'react';
import {useSelector} from 'react-redux';
import {CurrencyExchange} from "../Components/CurrencyExchange";
import {CurrencyType} from "../Redux/currencyReducer";
import {changeActionAC, changeCurrencyFieldAC, changeCurrentCurrencyAC, useDispatch} from "../Redux/actions";
import {selectCurrency} from "../Redux/selectors";


const CurrencyEContainer: React.FunctionComponent = () => {

    const dispatch = useDispatch()

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = useSelector(selectCurrency)


    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {

        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC({amountOfBYN: value, amountOfCurrency: value}));
                } else {
                    dispatch(changeCurrencyFieldAC({amountOfBYN: value, amountOfCurrency:(+Number(value).toFixed(2) / currencyRate).toFixed(2)}));
                }
            } else {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC({amountOfBYN: value, amountOfCurrency: value}));
                } else {
                    dispatch(changeCurrencyFieldAC({amountOfBYN: (+Number(value).toFixed(2) * currencyRate).toFixed(2), amountOfCurrency:value}));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch(changeActionAC({isBuying: e.currentTarget.dataset.action === 'buy'}));
    };
    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC({currentCurrency: e.currentTarget.dataset.currency}));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

export default CurrencyEContainer;