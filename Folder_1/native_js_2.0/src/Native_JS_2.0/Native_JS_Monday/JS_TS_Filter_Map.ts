const ages = [18, 20, 22, 1, 100, 90, 14];
let sortAges = (age: number) => {
    let oldAges = ages.filter((e) => {
        return e > 90
    });
    console.log(oldAges)
}
const oldAges = [100];
export type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]
let sortCourses = (course: CourseType) => {
    let expensiveCourses = courses.filter((e) => {
        return e.price < 160
    })
    console.log(expensiveCourses)
}


export const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 29,
        isMarried: true,
        scores: 89,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 22,
        isMarried: false,
        scores: 100,
    }
]

export const getName = (arr: any) => {
    let result = students.map(e => e.name
     )
    return result
}

export const getValue = (arr: any) => {
    let result = students.map(e => `${e.name} , ${e.age} y.o, ${e.scores} scores`
    )
    return result
}
