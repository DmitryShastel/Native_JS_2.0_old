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



