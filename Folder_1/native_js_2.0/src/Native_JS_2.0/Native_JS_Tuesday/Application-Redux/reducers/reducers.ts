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

export const cashReducer = (state: DefaultCashStateType = defaultCashState, action: CashActionType) : DefaultCashStateType => {
    switch (action.type) {

        case 'ADD_MONEY':
            return {...state, cash: state.cash + action.payload}

        case 'GET_MONEY':
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}


export type DefaultCustomerStateType = {
    customers: Array<[]>
}

export const defaultCustomerState = {
    customers: []
}

type CustomerActionType = {
    type: string
    payload: number
}

export const customerReducer = (state: DefaultCustomerStateType = defaultCustomerState, action: any) : DefaultCustomerStateType => {
    switch (action.type) {

        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}

        case 'REMOVE_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}

        default:
            return state
    }
}