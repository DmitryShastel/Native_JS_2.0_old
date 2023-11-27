import {useDispatch as _useDispatch} from "react-redux";

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ac: CurrencyReducersTypes) => dispatch(ac)
}

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

export type ChangeCurrencyFieldPayload = {
    amountOfBYN: string
    amountOfCurrency: string
}

export const changeCurrencyFieldAC = makeAction<ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, ChangeCurrencyFieldPayload>(ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE)

export type ChangeActionPayload = {
    isBuying: boolean
}

export const changeActionAC = makeAction<ACTIONS_TYPE.CHANGE_CHANGE_ACTION, ChangeActionPayload>(ACTIONS_TYPE.CHANGE_CHANGE_ACTION)

export type ChangeCurrentCurrencyPayload = {
    currentCurrency: string
}

export const changeCurrentCurrencyAC = makeAction<ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, ChangeCurrentCurrencyPayload>(ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY)

interface IStringMap<T> {
    [key: string]: T;
}

type IAnyFunction = (...args: any[]) => any

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>


const actions = {
    changeCurrentCurrencyAC,
    changeActionAC,
    changeCurrencyFieldAC,
}

export type CurrencyReducersTypes = IActionUnion<typeof actions>;