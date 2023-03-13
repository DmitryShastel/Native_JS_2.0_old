export type DefaultCashStateType = {
    cash: number
}

type ActionType = {
    type: string
    payload: number
}

export const defaultCashState = {
    cash: 0
}

export const cashReducer = (state: DefaultCashStateType = defaultCashState, action: ActionType) : DefaultCashStateType => {
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


export const customerReducer = (state: DefaultCustomerStateType = defaultCustomerState, action: ActionType) : DefaultCustomerStateType => {
    switch (action.type) {

        case 'ADD_CUSTOMER':
            return {...state, cash: state.cash + action.payload}

        case 'GET_CUSTOMER':
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}