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
export type UserWithLaptopOptions =  UserType & {
    laptop: LaptopType2
}

export let users = [
    {name: 'Dima', age: 30},
    {name: 'Bob', age: 23}
]

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