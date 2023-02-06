import {user, users} from "../JS_TS_Mutability";


type UserType = {
    name: string
    hair: number
    address: {title: string}
}

let increaseHair = (user: UserType , power: number) => {
    let copy = {...user}
    copy.hair = copy.hair / power
    return copy
}

test ('reference type test', () => {

    let cutUser = increaseHair(user, 2)


    expect(user.hair).toBe(30)
    expect(cutUser.hair).toBe(15)
    expect(cutUser.address).toBe(user.address)
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

