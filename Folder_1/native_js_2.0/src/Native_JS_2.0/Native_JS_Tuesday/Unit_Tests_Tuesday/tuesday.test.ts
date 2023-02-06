import {increaseHair, users, UserType, UserWithLaptopType} from "../JS_TS_Mutability";

test ('reference type test', () => {

    let user: UserType = {
        name: 'Dima',
        hair: 30,
        address: {
            title: 'Minsk'
        }
    }
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
    let user: UserType = {
        name: 'Dima',
        hair: 30,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2 = {
        name: 'Natasha',
        age: 30,
        address: addr
    }
    user2.address.title = 'Сanary'
    expect(user.address.title).toBe( 'Сanary')
})


test ('change user address', () => {

    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')
    user = movedUser;


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')
})
