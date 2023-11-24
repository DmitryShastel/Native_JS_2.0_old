export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}
//@ts-ignore
export type ChangeCurrencyFieldType = {

};

//@ts-ignore
export type ChangeAction = {

};

//@ts-ignore
export type ChangeCurrentCurrencyType = {

};

//@ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {

};

//@ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {

};

//@ts-ignore
export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {

};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;