import {user, users} from "../JS_TS_Mutability";


type UserType = {
    name: string
    age: number
}

let increaseAge = (u: UserType) => {
    u.age = u.age + 1
}

test ('reference type test', () => {
    increaseAge(user)

    expect(user.age).toBe(31)
})

test ('array type test', () => {
   let admins = users
    
    admins.push({ name: 'Alex', age: 10})

    expect(users[2]).toEqual({ name: 'Alex', age: 10})
})