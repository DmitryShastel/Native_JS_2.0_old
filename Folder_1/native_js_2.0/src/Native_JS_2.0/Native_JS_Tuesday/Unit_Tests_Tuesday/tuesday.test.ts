import {user} from "../JS_TS_Mutability";


type UserType = {
    name: string
    age: number
}

let increaseAge = (u: UserType) => {
    u.age = u.age + 1
}

test ('big test', () => {
    increaseAge(user)

    expect(user.age).toBe(31)
})