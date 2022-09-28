export type LocalCityType = {
    title: string
    country: string
}
export type LocalAddressType = {
    streetTitle: string
    city: LocalCityType
}
export type TeachType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TeachType>
}

export let student: StudentType = {
    id: 1,
    name: "Dima",
    age: 31,
    isActive: false,
    address: {
        streetTitle: 'Gerasimenko',
        city: {
            title: 'Minsk',
            country: 'Belarus',
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'JS'},
        {id: 3, title: 'React'},
    ]
}

// console.log(student.age);
// console.log(student.name);
// console.log(student.address.city.title);
// console.log(student.technologies[2].title);


export type HouseType = {
    buildedAt: number
    repaid: boolean
    address: AddressType
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type StreetType = {
    title: string
}
export type GovermentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}

//Native_JS_#01

export let user = {
    name: 'Alex',
    age: 23,
    isStudent: true
}

//copy object
export let newUser = {...user};
newUser.name = 'Bob'

export let users = [
    {
        name: 'Alex1',
        age: 28,
        isStudent: true
    },
    {
        name: 'Alex2',
        age: 54,
        isStudent: false
    }
]

export let copyUsers = {...users};
copyUsers[0].name = 'Dima';


