//1 this method is sorting out of the box without additional parameters

const str1 = ['Bob', 'Alex', 'John']
//console.log(str1.sort()) //['Alex', 'Bob', 'John']

//2 it's sorts type strings alphabetically

const str2 = ['Bob', 'Alex', 'John', 'john', '123', 'игорь', 'Юрий']
//console.log(str2.sort()) //['123', 'Alex', 'Bob', 'John', 'john', 'Юрий', 'игорь']


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
        name: 'Alex',
        age: 23,
        isMarried: false,
        scores: 105,
    }
]

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

//сортировка массива объектов по строковым значениям
//а. Регистрозависимоя

const compareObjByName = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else {
        return -1
    }
}

//console.log(students.sort(compareObjByName))

//б. РегистроНЕзависимоя
//console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

//Сортировка массива объектов по числовым значениям
//console.log(students.sort((a, b) => a.name - b.name))

// let x = 10
// let y = x
//
// x = 2
// console.log(y)

// let x = [1, 3, 8, 55]
// let y = x
// x[0] = 22
// console.log(y)


let userCopy = {...user}

//check
console.log(user === userCopy)
console.log(user.friends === userCopy.friends)

let deepCopy = {...user, friends: [...user.friends]}
console.log(user === deepCopy)
console.log(user.friends === deepCopy.friends)

let copyStudents = [...students]
console.log(students === copyStudents)
console.log(students[1] === copyStudents[1])

const deepCopyStudents = students.map((st) => ({ ...st }))
console.log(deepCopyStudents)
console.log(students)

console.log(deepCopyStudents[1] === students[1])


//Отсортируйте students по алфовиту
let sortFnName = (a, b) => {
    switch (a.name > b.name) {
        case true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}

let sortByName = students.sort(sortFnName);
console.log(sortByName);


//Отсортируйте students по успеваймости
let sortFnScore = (a, b) => {
    switch (a.scores > b.scores) {
        case true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}
let sortByScores = students.sort(sortFnScore)
console.log(sortByScores);


//Сформируйте массив студентов у которых 100 и более баллов
let bestStudents = deepCopyStudents.filter(s => s.scores >= 100)
console.log(bestStudents)

//Получите массив ('вырежте') из трех лучших студентов из массива deepCopyStudents

let topStudents = deepCopyStudents.splice(2, 3);
console.log(topStudents);

//Обедините массивы deepCopyStudents topStudents так, чтобы сохранился порядок сортировки
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log(newDeepCopyStudents);

//Сформировать массив холостых студентов
let studentsName = students.filter(f => !f.isMarried)
console.log(studentsName);

//Сформируйте массив имен студентов
let studentsNames = students.map(s => s.name)
console.log(studentsNames);

//Сформируйте строку из имен студентов, разделенных: запятой, пробелом
let nameWithSpace = studentsNames.join(', ')
console.log(nameWithSpace);
let namesWithComma = studentsNames.join()
console.log(namesWithComma);












