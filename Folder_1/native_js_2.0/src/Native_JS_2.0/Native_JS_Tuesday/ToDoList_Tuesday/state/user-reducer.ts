type UserType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: UserType, action: ActionType): UserType => {
    switch (action.type) {
        case 'INCREMENT-AGE' :
            return {...state, age: state.age + 1}


        default:
            return state
    }
}