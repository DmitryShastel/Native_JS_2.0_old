// import React from 'react';
// import {FilterType} from "../../../App";
//
//
// export type NewComponentType = {
//     money: Array<MoneyType>
//     filterForMoney: (value: FilterType) => void
// }
//
// export type MoneyType = {
//     banknots: string
//     value: number
//     number: string
// }
//
//
// export const NewComponent = (props: NewComponentType) => {
//
//
//     return (
//         <div>
//             <ul>
//                 {props.money.map((m, index) => {
//                     return (
//                         <li >
//                             <span>{m.banknots}</span>
//                             <span>{m.value}</span>
//                             <span>{m.number}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <button onClick={() => props.filterForMoney('All')}>All</button>
//             <button onClick={() => props.filterForMoney('Dollars')}>Dollars</button>
//             <button onClick={() => props.filterForMoney('RUBLS')}>Rubuls</button>
//
//         </div>
//     );
// };

//
// import React, {useState} from "react";
// import {FilterType} from "../../../App";
//
// export type FilterType = 'All' | 'Dollars' | 'RUBLS'
//
// const [filter, setFilter] = useState<FilterType>('All')
// const [money, setMoney] = useState([
//     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
// ])
//
//
// let filteredMoney = money
// if(filter === 'Dollars') {
//     filteredMoney = money.filter(m => m.banknots === 'Dollars')
// }
// if(filter === 'Dollars') {
//     filteredMoney = money.filter(m => m.banknots === 'RUBLS')
// }
//
// let filterForMoney = (value: FilterType) => {
//     setFilter(value)
// }
//
// <NewComponent money={filteredMoney} filterForMoney={filterForMoney}/>