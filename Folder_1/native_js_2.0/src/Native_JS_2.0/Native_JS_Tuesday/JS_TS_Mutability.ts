export let users = [
    {name: 'Dima', age: 30},
    {name: 'Bob', age: 23}
]

export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type  LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type  LaptopType2 = {
    title: string
    serialNumber: SerialNumberType
}
export type  SerialNumberType = {
    number: number
}
export type UserWithLaptopOptions = UserType & {
    laptop: LaptopType2
}
export type UserWithBookType = UserType & {
    laptop: LaptopType2
    books: Array<string>
}
export type CompanyType = {
    id: number
    title: string
}
export type UserWithSkillsType = UserType & {
    laptop: LaptopType2
    books: Array<string>
    skills: Array<number>
}
export type UserWithCompanyType = UserType & {
    laptop: LaptopType2
    books: Array<string>
    skills: Array<number>
    companies: Array<CompanyType>
}


//fun
export let increaseHair = (user: UserType, power: number) => {
    let copy = {...user}
    copy.hair = copy.hair / power
    return copy
}
export let moveUser = (user: UserWithLaptopType, city: string) => {
    let moveUser = {...user}
    moveUser.address = {
        ...moveUser.address,
        city: city
    }
    return moveUser

}
export let upgradeUserLaptop = (user: UserWithLaptopType, title: string) => {
    let upgradedUser = {...user}
    upgradedUser.laptop = {
        ...upgradedUser.laptop,
        title: title
    }
    return upgradedUser

}
export let upgradeUserLaptopOptions = (user: UserWithLaptopOptions, number: number) => {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            serialNumber: {
                number: number
            }
        }
    }
}
export let upgradeUserHouseNumber = (user: UserWithLaptopOptions & UserWithBookType, house: number) => {
    return {
        ...user,
        address: {
            ...user.address,
            house: house
        }
    }
}
export let upgradeUserBooks = (user: UserWithLaptopOptions & UserWithBookType, newBook: string) => {
    return {
        ...user,
        books: [...user.books, newBook]
    }
}
export let upgradeUserReplaceBook = (user: UserWithLaptopOptions & UserWithBookType, oldBook: string, newBook: string) => {
    return {
        ...user,
        books: user.books.map(b => b === oldBook ? newBook : oldBook)
    }
}
export let upgradeUserSkills = (user: UserWithLaptopOptions & UserWithSkillsType, oldSkill: number, newSkill: number) => {
    return {
        ...user,
        skills: user.skills.map(s => s === oldSkill ? newSkill : oldSkill)
    }
}
export let upgradeUserRemoveBook = (user: UserWithLaptopOptions & UserWithBookType, oldBook: string,) => {
    return {
        ...user,
        books: user.books.filter(b => b !== oldBook)
    }
}
export let upgradeUserAddCompany = (user: UserWithLaptopOptions & UserWithCompanyType, newCompany: CompanyType) => {
    return {
        ...user,
        companies: [...user.companies, newCompany]
    }
}
export let upgradeUserCompanyTitle = (user: UserWithCompanyType & UserWithCompanyType, id: number, newTitle: string) => {
    return {
        ...user,
        companies: user.companies.map(c => c.id === id ? {...c, title: newTitle} : c)

    }
}


export type UserType2 = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType3 = {
    title: string
}
export type UserWithLaptopType3 = UserType2 & {
    laptop: LaptopType3
}

export type UserBooksType2 = {
    books: Array<string>
}


export let makeHairsstyle = (u: UserType2, power: number) => {
    let copyUser = {...u, hair: u.hair / power}
    return copyUser
}

export let movedUser2 = (u: UserWithLaptopType3, title: string) => {
    let copyUser = {...u, address: {city: title}}
    return copyUser
}

export let upgradedUser2 = (u: UserWithLaptopType3, title: string) => {
    return {
        ...u, laptop: {...u.laptop, title: title}
    }
}

export let addNewBooksToUser = (u: UserWithLaptopType3 & UserBooksType2, books: string) => {
    return {
        ...u, books: [...u.books, books]
    }
}