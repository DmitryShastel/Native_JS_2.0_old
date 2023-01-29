// import React from 'react';
// import {City} from "./City";
// import {BanknotsType, MoneyType} from "../../../App";
//
//
// type CountryPropsType = {
//     data: Array<MoneyType>
//     setFilterValue: any
//     moneyFilter: (value: BanknotsType) => void
// }
//
// export const Country = (props: CountryPropsType) => {
//     const setAll = () => {
//         props.moneyFilter("All")
//     }
//
//     const setDollars = () => {
//         props.moneyFilter("Dollars")
//     }
//
//     const setRUBLS = () => {
//         props.moneyFilter("RUBLS")
//     }
//
//     return (
//         <div>
//             <button onClick={setAll}>All</button>
//             <button onClick={setDollars}>Dollars</button>
//             <button onClick={setRUBLS}>RUBLS</button>
//             <City data={props.data}/>
//         </div>
//     );
// };
//
