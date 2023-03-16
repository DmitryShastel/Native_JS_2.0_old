export type DefaultCashStateType = {
    cash: number
}
type CashActionType = {
    type: string
    payload: number
}
export const defaultCashState = {
    cash: 0
}

const ADD_MONEY = 'ADD-MONEY'
const GET_MONEY = 'GET-MONEY'

// export const addMoneyAC = (payload: number) => {
//     return {
//         type: 'ADD-MONEY',
//         payload
//     }
// }

export const cashReducer = (state: DefaultCashStateType = defaultCashState, action: CashActionType) => {
    switch (action.type) {

        case ADD_MONEY:
            return {...state, cash: state.cash + action.payload}

        case GET_MONEY:
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

export type CustomerType = {
    id: string
    name: string
}
export type DefaultCustomerStateType = {
    customers: Array<CustomerType>
}
export const defaultCustomerState = {
    customers: []
}
type CustomerActionType = {
    type: string
    payload: string
}

const ADD_CUSTOMER = 'ADD-CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE-CUSTOMER'

export const customerReducer = (state: DefaultCustomerStateType = defaultCustomerState, action: CustomerActionType) => {
    switch (action.type) {

        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}

        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}

        default:
            return state
    }
}

export const addCustomerAC = (payload: any) => {
    return {
        type: ADD_CUSTOMER,
        payload
    }
}