import {
    increaseHair,
    moveUser, upgradeUserAddCompany, upgradeUserBooks, upgradeUserCompanyTitle, upgradeUserHouseNumber,
    upgradeUserLaptop, upgradeUserLaptopOptions, upgradeUserRemoveBook, upgradeUserReplaceBook, upgradeUserSkills,
    users,
    UserType, UserWithBookType, UserWithCompanyType,
    UserWithLaptopOptions,
    UserWithLaptopType, UserWithSkillsType
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

    const userCopy = upgradeUserReplaceBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})
test('upgrade skills - replace 10 to 11', () => {

    let user: UserWithLaptopOptions & UserWithSkillsType = {
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
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 25, 36, 88]
    }

    const userCopy = upgradeUserSkills(user, 10, 11)

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.skills.length).toBe(4)
    expect(userCopy.skills[0]).toBe(11)
})
test('upgrade books - remove book', () => {

    let user: UserWithLaptopOptions & UserWithSkillsType = {
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
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 25, 36, 88],
    }

    const userCopy = upgradeUserRemoveBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.skills.length).toBe(4)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('react')
})
test('upgrade company - add company', () => {

    let user: UserWithLaptopOptions & UserWithCompanyType = {
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
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 25, 36, 88],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = upgradeUserAddCompany(user,  {id:3, title:'Google'})

    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('Google')
    expect(userCopy.companies[2].id).toBe(3)
})
test('upgrade company - company title', () => {

    let user: UserWithLaptopOptions & UserWithCompanyType = {
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
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 25, 36, 88],
        companies: [{id: 1, title: 'epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = upgradeUserCompanyTitle(user,  1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.laptop.title).toBe(userCopy.laptop.title)
    expect(user.laptop.serialNumber.number).toBe(userCopy.laptop.serialNumber.number)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe('EPAM')
})