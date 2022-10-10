export const ages = [18, 20, 22, 1, 100, 90, 14];


export let sortAges = () => {
    let oldAges = ages.filter((e) => {
        return e > 90
    });
    console.log(oldAges)
}
export let oldAges = [100];


export type CourseType = {
    title: string
    price: number
}
export const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

export let sortCourses = (course: CourseType) => {
    let expensiveCourses = courses.filter((e) => {
        return e.price < 160
    })
    console.log(expensiveCourses)
}



