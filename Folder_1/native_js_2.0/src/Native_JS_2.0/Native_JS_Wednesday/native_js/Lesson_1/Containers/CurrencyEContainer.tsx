import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {CurrencyExchange} from "../Components/CurrencyExchange";
import {CurrencyState, CurrencyType} from "../Redux/currencyReducer";
import {ChangeActionAC, ChangeCurrencyFieldAC, ChangeCurrentCurrencyAC, useDispatch} from "../Redux/actions";
import {IGlobalState} from "../Redux/state";

// interface ICurrencyProps extends CurrencyState {
//     setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void
//     setAction: (isBuying: boolean) => void
//     changeCurrency: (currency: string) => void
// }

// interface ICurrencyProps extends CurrencyState {
//     ChangeActionAC: Function,
//     ChangeCurrencyFieldAC: Function,
//     ChangeCurrentCurrencyAC: Function,
// }


//const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> =  ({
const CurrencyEContainer: React.FunctionComponent<CurrencyState> = ({
                                                                        currencies,
                                                                        currentCurrency,
                                                                        isBuying,
                                                                        amountOfBYN,
                                                                        amountOfCurrency,
                                                                        // ChangeActionAC,
                                                                        // ChangeCurrencyFieldAC,
                                                                        // ChangeCurrentCurrencyAC,
                                                                        // setCurrencyAmount,
                                                                        // setAction,
                                                                        // changeCurrency,
                                                                    }) => {

    const dispatch = useDispatch()


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
                    //setCurrencyAmount(value, value);
                    //ChangeCurrencyFieldAC(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    //ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value));
                    //ChangeCurrencyFieldAC(value, value);
                    //setCurrencyAmount(value, value);
                } else {
                    //setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    //ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        //e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
        //e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
        dispatch(ChangeActionAC(e.currentTarget.dataset.action === 'buy'));
    };
    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        //e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
        //e.currentTarget.dataset.currency && ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency);
        e.currentTarget.dataset.currency && dispatch(ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
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


const mapStateToProps = (state: IGlobalState) => {
    return {
        currencies: state.currency.currencies,
        currentCurrency: state.currency.currentCurrency,
        isBuying: state.currency.isBuying,
        amountOfBYN: state.currency.amountOfBYN,
        amountOfCurrency: state.currency.amountOfCurrency,
    };
};


// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>)  => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(ChangeCurrentCurrencyAC(currency));
//         },
//     };
// };


// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {
//     ChangeActionAC,
//     ChangeCurrencyFieldAC,
//     ChangeCurrentCurrencyAC,
// }))(CurrencyEContainer)

export const CurrencyExchangeContainer = compose(connect(mapStateToProps))(CurrencyEContainer)


// const connector = connect(mapStateToProps, mapDispatchToProps);
//
// type TProps = ConnectedProps<typeof connector>;
//
// export default connector(CurrencyEContainer);


// interface ICurrencyProps extends CurrencyState {
//     setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void
//     setAction: (isBuying: boolean) => void
//     changeCurrency: (currency: string) => void
// }

// import React from 'react';
// import {Dispatch} from 'redux';
// import {ChangeActionAC, ChangeCurrencyFieldAC, ChangeCurrentCurrencyAC, CurrencyReducersTypes} from '../Redux/actions';
// import {useDispatch, useSelector} from 'react-redux';
// import {CurrencyType, selectAll} from "../Redux/currencyReducer";
// import {CurrencyExchange} from "../Components/CurrencyExchange";
//
//
// // const CurrencyEContainer: React.FC<TProps> = props => {
// export const CurrencyEContainer: React.FC = () => {
//
//     // const {
//     //     currencies,
//     //     currentCurrency,
//     //     isBuying,
//     //     amountOfBYN,
//     //     amountOfCurrency,
//     //     setCurrencyAmount,
//     //     setAction,
//     //     changeCurrency,
//     // } = props;
//     //
//     // const {
//     //     currencies,
//     //     currentCurrency,
//     //     isBuying,
//     //     amountOfBYN,
//     //     amountOfCurrency,
//     //     ChangeActionAC,
//     //     ChangeCurrencyFieldAC,
//     //     ChangeCurrentCurrencyAC,
//     // } = props;
//     //
//     // const {
//     //     currencies,
//     //     currentCurrency,
//     //     isBuying,
//     //     amountOfBYN,
//     //     amountOfCurrency,
//     // } = props;
//
//
//     const {
//         //@ts-ignore
//         currencies,
//         //@ts-ignore
//         currentCurrency,
//         //@ts-ignore
//         isBuying,
//         //@ts-ignore
//         amountOfBYN,
//         //@ts-ignore
//         amountOfCurrency,
//     } = useSelector(selectAll);
//
//     const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>();
//
//     let currencyRate: number = 0;
//     const currenciesName = currencies.map((currency: CurrencyType) => {
//         if (currency.currencyName === currentCurrency) {
//             currencyRate = isBuying ? currency.buyRate : currency.sellRate;
//         }
//         return currency.currencyName;
//     });
//
//     const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
//         let value = e.currentTarget.value;
//         if (!isFinite(+value)) return;
//         if (e.currentTarget.dataset.currency) {
//             const trigger: string = e.currentTarget.dataset.currency;
//             if (trigger === 'byn') {
//                 if (value === '') {
//                     // setCurrencyAmount(value, value);
//                     // ChangeCurrencyFieldAC(value, value);
//                     dispatch(ChangeCurrencyFieldAC(value, value));
//                 } else {
//                     // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
//                     // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
//                     dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
//                 }
//             } else {
//                 if (value === '') {
//                     // setCurrencyAmount(value, value);
//                     // ChangeCurrencyFieldAC(value, value);
//                     dispatch(ChangeCurrencyFieldAC(value, value));
//                 } else {
//                     // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
//                     // ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
//                     dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
//                 }
//             }
//         }
//     };
//
//     const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
//         // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
//         // e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
//         e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
//     };
//
//     const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
//         // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
//         // e.currentTarget.dataset.currency && ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency);
//         e.currentTarget.dataset.currency && dispatch(ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
//     };
//
//     return (
//         <React.Fragment>
//             <CurrencyExchange
//                 currenciesName={currenciesName}
//                 currentCurrency={currentCurrency}
//                 currencyRate={currencyRate}
//                 isBuying={isBuying}
//                 amountOfBYN={amountOfBYN}
//                 amountOfCurrency={amountOfCurrency}
//                 changeCurrencyField={changeCurrencyField}
//                 changeAction={changeAction}
//                 changeCurrentCurrency={changeCurrentCurrency}
//             />
//         </React.Fragment>
//     );
// };
//
// // const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
// //     return {
// //         currencies: currency.currencies,
// //         currentCurrency: currency.currentCurrency,
// //         isBuying: currency.isBuying,
// //         amountOfBYN: currency.amountOfBYN,
// //         amountOfCurrency: currency.amountOfCurrency,
// //     };
// // };
//
// // const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) : any => {
// //     return {
// //         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
// //             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
// //         },
// //         setAction(isBuying: boolean) {
// //             dispatch(ChangeActionAC(isBuying));
// //         },
// //         changeCurrency(currency: string) {
// //             dispatch(ChangeCurrentCurrencyAC(currency));
// //         },
// //     };
// // };
//
// //const connector = connect(mapStateToProps, mapDispatchToProps);
//
// // const connector = connect(mapStateToProps, {
// //     ChangeActionAC,
// //     ChangeCurrencyFieldAC,
// //     ChangeCurrentCurrencyAC,
// // });
//
//
// // const connector = connect(mapStateToProps, {});
// //
// // type TProps = ConnectedProps<typeof connector>;
// //
// // export default connector(CurrencyEContainer);