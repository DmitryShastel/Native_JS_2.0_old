type AgesType = Array<number>
type AgesType2 = Array<number | string | boolean>

let ages: AgesType = [12, 2, 5, 88]
let ages2: AgesType2 = [12, 2, 5, 88, 'aa', true]


// type ArraysType = {
//     name?: string
//     height?: number
//     model?: string
//     year?: number
// }


interface IMan {
    name: string
    height: number
}

interface ICar {
    model: string
    year: number
}

let man1: IMan = {name: 'Dima', height: 1.78}
let man2: IMan = {name: 'Alex', height: 1.78}
let car: ICar = {model: 'BMW', year: 2022}

type IArr = Array<IMan>

let arr: IArr = [
    {name: 'Dima', height: 1.78},
    {name: 'Alex', height: 1.78}
]

export default 1