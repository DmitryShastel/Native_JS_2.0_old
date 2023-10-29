type UserType = {
    age: string
    childrenCount: string
    name: string
}

type ActionType = {
    type: string
    [key: string]: any
}


export const userReducer = (state: UserType, action: ActionType): UserType => {
    switch (action.type) {
    }
    return state
};