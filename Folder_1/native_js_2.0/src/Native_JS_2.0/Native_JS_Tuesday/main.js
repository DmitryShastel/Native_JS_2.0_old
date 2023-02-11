// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man}
man.age = 36
manFullCopy.name = 'Dima'
// console.log(man)
// console.log(manFullCopy)


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]
numbers[0] = 'A'
numbersFullCopy.push(4)
// console.log(numbers === numbersFullCopy)
// console.log(numbers)
// console.log(numbersFullCopy)

// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1, mother: {...man1.mother}}

man1.name = 'Dima'
man1.mother.name = 'Masha'
man1FullCopy.age = 32
man1FullCopy.mother.age = 26

// console.log(man1 === man1FullCopy)
// console.log(man1)
// console.log(man1FullCopy)


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy  = {...man2, friends : [...man2.friends]}

man2.name = 'Dima'
man2.friends[0] = 12
man2FullCopy.age = 38
man2FullCopy.friends.push(222)

console.log(man2 === man2FullCopy)
console.log(man2)
console.log(man2FullCopy)

// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy  // your code


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy //  your code


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy //  your code

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy //  your code


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy  //  your code


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy  //  your code


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
        name: 'Ann',
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


// let userCopy = {...user}
//
// //check
// console.log(user === userCopy)
// console.log(user.friends === userCopy.friends)
//
// let deepCopy = {...user, friends: [...user.friends]}
// console.log(user === deepCopy)
// console.log(user.friends === deepCopy.friends)
//
// let copyStudents = [...students]
// console.log(students === copyStudents)
// console.log(students[1] === copyStudents[1])
//
// const deepCopyStudents = students.map((st) => ({...st}))
// console.log(deepCopyStudents)
// console.log(students)
//
// console.log(deepCopyStudents[1] === students[1])
//
//
// //Отсортируйте students по алфовиту
// let sortFnName = (a, b) => {
//     switch (a.name > b.name) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
// }
//
// let sortByName = students.sort(sortFnName);
// console.log(sortByName);
//
//
// //Отсортируйте students по успеваймости
// let sortFnScore = (a, b) => {
//     switch (a.scores > b.scores) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
// }
// let sortByScores = students.sort(sortFnScore)
// console.log(sortByScores);
//
//
// //Сформируйте массив студентов у которых 100 и более баллов
// let bestStudents = deepCopyStudents.filter(s => s.scores >= 100)
// console.log(bestStudents)
//
// //Получите массив ('вырежте') из трех лучших студентов из массива deepCopyStudents
//
// let topStudents = deepCopyStudents.splice(2, 3);
// console.log(topStudents);
//
// //Обедините массивы deepCopyStudents topStudents так, чтобы сохранился порядок сортировки
// let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
// console.log(newDeepCopyStudents);
//
// //Сформировать массив холостых студентов
// let studentsName = students.filter(f => !f.isMarried)
// console.log(studentsName);
//
// //Сформируйте массив имен студентов
// let studentsNames = students.map(s => s.name)
// console.log(studentsNames);
//
// //Сформируйте строку из имен студентов, разделенных: запятой, пробелом
// let nameWithSpace = studentsNames.join(', ')
// console.log(nameWithSpace);
// let namesWithComma = studentsNames.join()
// console.log(namesWithComma);
//
// //Добавте всем студентам свойство 'isStudent' со значением true
// let trueStudents = students.map(s => ({...s, isStudent: true}))
// console.log(trueStudents);
//
// //Nick женился. Выполните соотвецтвующее преобразование массива students
// let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
// console.log(studentsWithMarriedNick);
//
// //Найти студента по имени Ann
// let ann = students.find(f => f.name === 'Ann')
// console.log(ann);
//
// //Найти студента с самым высоким баллом
// let bestStudent = students.reduce((acc, s) => acc.scores > s.scores ? acc : s)
// console.log(bestStudent);
//
// //Найти сумму баллов студентов
// let scoresSum = students.reduce((acc, s) => acc + s.scores, 0)
// console.log(scoresSum);
//
// //*Напишите функцию addFriends, которая принимает параметром массив students
// //и добавляет каждому студенту свойство 'friends',
// //значением которого является массив имен всех остальных студентов из массива,
// //за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно
//
// const addFriends = (students) => {
//     let friends = students.map((s) => {
//       return  {...s, friends: [s.name]}
//     })
//
//     return friends
// }
// console.log(addFriends(students));

//_______________________________________________________________________

let a = {
    name: 'it-kamasutra.com',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['Ivan', 'Andrey', 'Farid'],
    classroom: {
        teacher: {
            name: 'Dima',
            age: 18
        }
    }
}

let b = {...a}
b.classroom = {...a.classroom}
b.classroom.teacher = {...a.classroom.teacher}
b.students = [...a.students]
b.classroom.teacher.name = 'Dmitry'

































