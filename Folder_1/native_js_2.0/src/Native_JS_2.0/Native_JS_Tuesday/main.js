//1 this method is sorting out of the box without additional parameters

const str1 = ['Bob', 'Alex', 'John']
console.log(str1.sort()) //['Alex', 'Bob', 'John']

//2 it's sorts type strings alphabetically

const str2 = ['Bob', 'Alex', 'John', 'john', '123', 'игорь', 'Юрий']
console.log(str2.sort()) //['123', 'Alex', 'Bob', 'John', 'john', 'Юрий', 'игорь']


const students = [
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
    },
    {
        id: 5,
        name: 'alex',
        age: 23,
        isMarried: false,
        scores: 105,
    }
]

//сортировка массива объектов по строковым значениям
//а. Регистрозависимоя

const compareObjByName = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}

console.log(students.sort(compareObjByName))

//б. РегистроНЕзависимоя
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

//Сортировка массива объектов по числовым значениям
console.log(students.sort((a, b) => a.name - b.name))

let x = 10
let y = x

x = 2
console.log(y)



















