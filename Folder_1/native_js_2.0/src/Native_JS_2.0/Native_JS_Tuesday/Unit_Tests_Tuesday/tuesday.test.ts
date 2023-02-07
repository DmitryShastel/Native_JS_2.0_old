import {
    increaseHair,
    moveUser, upgradeUserBooks, upgradeUserHouseNumber,
    upgradeUserLaptop, upgradeUserLaptopOptions, upgradeUserReplaceBook,
    users,
    UserType, UserWithBookType,
    UserWithLaptopOptions,
    UserWithLaptopType
} from "../JS_TS_Mutability";

test('reference type test', () => {

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
test('array reference type test', () => {
    let admins = users

    admins.push({name: 'Alex', age: 10})

    expect(users[2]).toEqual({name: 'Alex', age: 10})
})
test('change address', () => {
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
    expect(user.address.city).toBe('Сanary')
})
test('change user address', () => {

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
test('upgrade laptop to macbook', () => {

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
test('upgrade laptop serial number', () => {

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

    const upgradedUserLaptop = upgradeUserLaptopOptions(user, 9)

    expect(user).not.toBe(upgradedUserLaptop)
    expect(user.name).toBe('Dima')
    expect(user.hair).toBe(30)
    expect(user.address.city).toBe(upgradedUserLaptop.address.city)
    expect(user.address.house).toBe(upgradedUserLaptop.address.house)
    expect(user.laptop.title).toBe(upgradedUserLaptop.laptop.title)
    expect(user.laptop.title).toBe(upgradedUserLaptop.laptop.title)
    expect(user.laptop.serialNumber.number).not.toBe(upgradedUserLaptop.laptop.serialNumber.number)
    expect(upgradedUserLaptop.laptop.serialNumber.number).toBe(9)
})
test('upgrade address - house number', () => {

    let user: UserWithLaptopOptions & UserWithBookType = {
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
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = upgradeUserHouseNumber(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.laptop.title).toBe(userCopy.laptop.title)
    expect(user.laptop.serialNumber.number).toBe(userCopy.laptop.serialNumber.number)
    expect(user.books).toBe(userCopy.books)
    expect(user.address.house).not.toBe(userCopy.address.house)
    expect(userCopy.address.house).toBe(99)
})
test('upgrade books - add new books to user', () => {

    let user: UserWithLaptopOptions & UserWithBookType = {
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
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = upgradeUserBooks(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('upgrade books - replace js to ts', () => {

    let user: UserWithLaptopOptions & UserWithBookType = {
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
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = upgradeUserReplaceBook(user, 'js','ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})