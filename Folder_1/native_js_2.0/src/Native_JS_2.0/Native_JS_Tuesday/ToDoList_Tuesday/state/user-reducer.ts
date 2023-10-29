type UserType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: UserType, action: UserReducerType): UserType => {
    switch (action.type) {
        case 'INCREMENT-AGE' :
            return {...state, age: state.age + 1};
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}

        default:
            return state
    }
}


type UserReducerType = IncrementUserAgeACType | IncrementUserChildrenCountACType
type IncrementUserAgeACType = ReturnType<typeof incrementUserAgeAC>
type IncrementUserChildrenCountACType = ReturnType<typeof incrementUserChildrenCountAC>

export const incrementUserAgeAC = () => {
    return {
        type: 'INCREMENT-AGE',
    } as const
}

export const incrementUserChildrenCountAC = () => {
    return {
        type: 'INCREMENT-CHILDREN-COUNT'
    } as const
}