type DefaultStateType = {
    cash: number
}

type ActionType = {
    type: string
    payload: number
}

const defaultState = {
    cash: 0
}

export const reducer = (state: DefaultStateType = defaultState, action: ActionType) => {
    switch (action.type) {

        case 'ADD_MONEY':
            return {...state, cash: state.cash + action.payload}

        case 'GET_MONEY':
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}