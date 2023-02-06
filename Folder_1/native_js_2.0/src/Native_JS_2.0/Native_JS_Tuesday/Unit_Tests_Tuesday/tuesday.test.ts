import {
    increaseHair,
    moveUser,
    upgradeUserLaptop,
    users,
    UserType,
    UserWithLaptopOptions,
    UserWithLaptopType
} from "../JS_TS_Mutability";

test ('reference type test', () => {

    let user: UserType = {
        name: 'Dima',
        hair: 30,
        address: {
            city: 'Minsk'
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
            city: 'Minsk'
        }
    }

    let addr = user.address

    let user2 = {
        name: 'Natasha',
        age: 30,
        address: addr
    }
    user2.address.city = 'Сanary'
    expect(user.address.city).toBe( 'Сanary')
})
test ('change user address', () => {

    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})
test ('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Dima',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test ('upgrade laptop serial number', () => {

    let user: UserWithLaptopOptions = {
        name: 'Dima',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
            serialNumber: {
                number: 8
            }
        },

    }

    const upgradedUserLaptope = upgradeUserLaptopOptions(user, 'Macbook')

    expect(user).not.toBe(upgradedUserLaptope)
    expect(user.address).toBe(upgradedUserLaptope.address)
    expect(user.laptop).toBe(upgradedUserLaptope.laptop)
    expect(upgradedUserLaptope.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(upgradedUserLaptope.laptop.serialNumber.number).toBe(8)
})