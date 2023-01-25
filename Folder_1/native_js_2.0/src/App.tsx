import React, {useState} from 'react';
import './App.css';
import {Country} from "./Native_JS_2.0/Native_JS_Monday/Components/Country";


export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: number
    number: string
}

function App() {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'}
    ])
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')


    let filterForMoney = money
    if(filterValue === 'Dollars') {
        filterForMoney = money.filter(m => m.banknotes === 'Dollars')
    }
    if(filterValue === 'RUBLS') {
        filterForMoney = money.filter(m => m.banknotes === 'RUBLS')
    }


    const moneyFilter = (value: BanknotsType) => {
        setFilterValue(value)
    }


    return (
        <div className="App">
            <Country
                data={filterForMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
                moneyFilter={moneyFilter}
            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
