import {
    increaseHair,
    moveUser, upgradeUserAddCompany, upgradeUserBooks, upgradeUserCompanyTitle, upgradeUserHouseNumber,
    upgradeUserLaptop, upgradeUserLaptopOptions, upgradeUserRemoveBook, upgradeUserReplaceBook, upgradeUserSkills,
    users,
    UserType, UserWithBookType, UserWithCompanyType,
    UserWithLaptopOptions,
    UserWithLaptopType, UserWithSkillsType
} from "../JS_TS_Mutability";
import {
    getBanknoteList,
    getSquarePositiveIntegers,
    getSum,
    getTriangleType,
    isEvenIndexSumGreater,
    sum,
    sumFirstNumbers
} from "../JS_TS_TDD";
import {ManeType} from "../Destructuring";

test.skip('reference type test', () => {

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
test.skip('array reference type test', () => {
    let admins = users

    admins.push({name: 'Alex', age: 10})

    expect(users[2]).toEqual({name: 'Alex', age: 10})
})
test.skip('change address', () => {
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
test.skip('change user address', () => {

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
test.skip('upgrade laptop to macbook', () => {

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
test.skip('upgrade laptop serial number', () => {

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
test.skip('upgrade address - house number', () => {

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
test.skip('upgrade books - add new books to user', () => {

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
test.skip('upgrade books - replace js to ts', () => {

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
test.skip('upgrade skills - replace 10 to 11', () => {

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
test.skip('upgrade books - remove book', () => {

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
test.skip('upgrade company - add company', () => {

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

    const userCopy = upgradeUserAddCompany(user, {id: 3, title: 'Google'})

    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('Google')
    expect(userCopy.companies[2].id).toBe(3)
})
test.skip('upgrade company - company title', () => {

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

    const userCopy = upgradeUserCompanyTitle(user, 1, 'EPAM')

    expect(user).not.toBe(userCopy)
    expect(user.laptop.title).toBe(userCopy.laptop.title)
    expect(user.laptop.serialNumber.number).toBe(userCopy.laptop.serialNumber.number)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe('EPAM')
})
test.skip("sum", () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
    expect(sum(0)).toBe(0)
})
test.skip("get Triangle Type", () => {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(2, 3, 3)).toBe("01")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(3, 2, 3)).toBe("01")
    expect(getTriangleType(4, 5, 3)).toBe("11")
    expect(getTriangleType(10, 2, 2)).toBe("00")
})
test.skip("get Sum ", () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})
test.skip("is Even Sum Greater", () => {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
})
test.skip("get Square Only Of Positive Integers", () => {
    const array = [4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]
    //const len = array.length
    const result = getSquarePositiveIntegers(array)
    //expect(result === array).toBe(false)
    //expect(array.length).toBe(len)
    expect(result.length).toBe(3)
    expect(result[0]).toBe(16)
    //expect(result[1]).toBe(64)
    //expect(result[2]).toBe(625)
    //expect(result[3]).toBe(81)
    expect(result[4]).toBe(100)
    expect(result[5]).toBe(36)
})
test.skip("sum of first N numbers", () => {
    expect(sumFirstNumbers(0)).toBe(0)
    expect(sumFirstNumbers(4)).toBe(10)
    expect(sumFirstNumbers(10)).toBe(55)
})
test.skip("get banknote list", () => {
    // надо бы проверять длинну резалтов и их сумму
    const result2500 = getBanknoteList(2500)
    const result23 = getBanknoteList(23)
    expect(result2500[0]).toBe(1000)
    expect(result2500[1]).toBe(1000)
    expect(result2500[2]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})




let props: ManeType;

    beforeEach(() => {
    props = {
        name: 'Dima',
        age: 30,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Minsk'
            }
        }
    }
})



test.skip("1", () => {

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(30)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Minsk')
})

test ("2", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})



type UsersType = {
    [key: string] : {id: number, name: string}
}

let usesrs: UsersType

beforeEach(() => {
    usesrs = {
        '21': {id: 21, name: 'Dima'},
        '44': {id: 44, name: 'Vasa'},
        '2': {id: 2, name: 'Valera'}
    }
})






