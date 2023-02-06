export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type  LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export let users = [
    {name: 'Dima', age: 30},
    {name: 'Bob', age: 23}
]

//fun
export let increaseHair = (user: UserType , power: number) => {
    let copy = {...user}
    copy.hair = copy.hair / power
    return copy
}