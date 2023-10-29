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
        case 'INCREMENT-NAME':
            return {...state, name: action.payload.newName}

        default:
            return state
    }
}


type UserReducerType = IncrementUserAgeACType | IncrementUserChildrenCountACType | IncrementUserNameACType
type IncrementUserAgeACType = ReturnType<typeof incrementUserAgeAC>
type IncrementUserChildrenCountACType = ReturnType<typeof incrementUserChildrenCountAC>
type IncrementUserNameACType = ReturnType<typeof incrementUserNameAC>

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

export const incrementUserNameAC = (newName: string) => {
    return {
        type: 'INCREMENT-NAME',
        payload: {
            newName
        }
    } as const
}