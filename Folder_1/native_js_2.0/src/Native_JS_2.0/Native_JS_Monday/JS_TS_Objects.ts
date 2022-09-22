type CityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TeachType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TeachType>
}

let student: StudentType = {
    id: 1,
    name: "Dima",
    age: 31,
    isActive: true,
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

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);
export {}