import {user, users} from "../JS_TS_Mutability";


type UserType = {
    name: string
    age: number
    address: {title: string}
}

let increaseAge = (u: UserType) => {
    u.age = u.age + 1
}

test ('reference type test', () => {
    increaseAge(user)

    expect(user.age).toBe(31)
})
test ('array reference type test', () => {
   let admins = users

    admins.push({ name: 'Alex', age: 10})

    expect(users[2]).toEqual({ name: 'Alex', age: 10})
})
test ('change address', () => {
    let addr = user.address

    let user2 = {
        name: 'Natasha',
        age: 30,
        address: addr
    }
    user2.address.title = 'Сanary'
    expect(user.address.title).toBe( 'Сanary')
})