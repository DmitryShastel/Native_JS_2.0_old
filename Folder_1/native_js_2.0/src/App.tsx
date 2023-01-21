import React, {useState} from 'react';
import {NewComponent} from "./Native_JS_2.0/Native_JS_Monday/Components/NewComponent";
import {type} from "os";


export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {

    const [filter, setFilter] = useState<FilterType>('All')
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])


    let filteredMoney = money
    if(filter === 'Dollars') {
        filteredMoney = money.filter(m => m.banknots === 'Dollars')
    }
    if(filter === 'Dollars') {
        filteredMoney = money.filter(m => m.banknots === 'RUBLS')
    }

    let filterForMoney = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <div className='block'>
                <NewComponent money={filteredMoney} filterForMoney={filterForMoney}/>
            </div>
        </div>
    )
}

export default App;
