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
        books: user.books.filter(b => b !== oldBook )
    }
}


export let upgradeUserAddCompany = (user: UserWithLaptopOptions & UserWithBookType, newBook: string) => {
    return {
        ...user,
        books: [...user.books, newBook]
    }
}



