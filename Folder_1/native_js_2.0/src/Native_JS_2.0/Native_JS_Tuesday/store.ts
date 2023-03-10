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
    surname?: string
}

interface ICar {
    model: string
    year: number
}

let man1: IMan = {name: 'Dima', height: 1.78, surname: 'test'}
let man2: IMan = {name: 'Alex', height: 1.78}
let car: ICar = {model: 'BMW', year: 2022}

type IArr = Array<IMan>

let arr: IArr = [
    {name: 'Dima', height: 1.78},
    {name: 'Alex', height: 1.78}
]

type FtoUpperCase = Array<string>


let toUpperCase = (strings: FtoUpperCase): FtoUpperCase => {
    let result = strings.map(s => s.toString());
    return result;
}


export default 1