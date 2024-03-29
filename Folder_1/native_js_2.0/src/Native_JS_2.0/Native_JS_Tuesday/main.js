// import {sum} from "../JS_TS_TDD";

// import { log } from "console";

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object

// let man = {
//   name: "John",
//   age: 28,
// };

// let manFullCopy = { ...man };
// man.age = 36;
// manFullCopy.name = "Dima";
// console.log(man)
// console.log(manFullCopy)

// 2. Array of primitives
// let numbers = [1, 2, 3];

// let numbersFullCopy = [...numbers];
// numbers[0] = "A";
// numbersFullCopy.push(4);
// console.log(numbers === numbersFullCopy)
// console.log(numbers)
// console.log(numbersFullCopy)

// 3. Object inside an object
// let man1 = {
//   name: "John",
//   age: 28,
//   mother: {
//     name: "Kate",
//     age: 50,
//   },
// };

// let man1FullCopy = { ...man1, mother: { ...man1.mother } };

// man1.name = "Dima";
// man1.mother.name = "Masha";
// man1FullCopy.age = 32;
// man1FullCopy.mother.age = 26;

// console.log(man1 === man1FullCopy)
// console.log(man1)
// console.log(man1FullCopy)

// 4. Array of primitives inside an object
// let man2 = {
//   name: "John",
//   age: 28,
//   friends: ["Peter", "Steven", "William"],
// };

// let man2FullCopy = { ...man2, friends: [...man2.friends] };

// man2.name = "Dima";
// man2.friends[0] = 12;
// man2FullCopy.age = 38;
// man2FullCopy.friends.push(222);

// console.log(man2 === man2FullCopy)
// console.log(man2)
// console.log(man2FullCopy)

// 5 Array of objects
// let people = [
//   { name: "Peter", age: 30 },
//   { name: "Steven", age: 32 },
//   { name: "William", age: 28 },
// ];

// let peopleFullCopy = people.map((e) => ({ ...e }));

// people[0].name = "Dima";
// peopleFullCopy[0].age = 20;

// console.log(people === peopleFullCopy)
// console.log(people)
// console.log(peopleFullCopy)

// 6 Array of objects inside object
// let man3 = {
//   name: "John",
//   age: 28,
//   friends: [
//     { name: "Peter", age: 30 },
//     { name: "Steven", age: 32 },
//     { name: "William", age: 28 },
//   ],
// };

// let man3FullCopy = {
//   ...man3,
//   friends: [...man3.friends.map((e) => ({ ...e }))],
// };

// man3.name = "Dima";
// man3.friends[0].name = "Vasa";
// man3FullCopy.age = 38;
// man3FullCopy.friends[0].age = 20;

// console.log(man3 === man3FullCopy)
// console.log(man3.friends === man3FullCopy.friends)
// console.log(man3)
// console.log(man3FullCopy)

// 7 Object inside an object, inside an object
// let man4 = {
//   name: "John",
//   age: 28,
//   mother: {
//     name: "Kate",
//     age: 50,
//     work: {
//       position: "doctor",
//       experience: 15,
//     },
//   },
// };

// let man4FullCopy = {
//   ...man4,
//   mother: { ...man4.mother, work: { ...man4.mother.work } },
// };

// man4.mother.work.experience = 10;
// man4FullCopy.mother.age = 36;

// console.log(man4 === man4FullCopy)
// console.log(man4.mother === man4FullCopy.mother)
// console.log(man4.mother.work === man4FullCopy.mother.work)
// console.log(man4)
// console.log(man4FullCopy)

// 8 Array of objects inside object -> object
// let man5 = {
//   name: "John",
//   age: 28,
//   mother: {
//     name: "Kate",
//     age: 50,
//     work: {
//       position: "doctor",
//       experience: 15,
//     },
//     parents: [
//       { name: "Kevin", age: 80 },
//       { name: "Jennifer", age: 78 },
//     ],
//   },
// };

// let man5FullCopy = {
//   ...man5,
//   mother: {
//     ...man5.mother,
//     work: { ...man5.mother.work },
//     parents: [...man5.mother.parents.map((e) => ({ ...e }))],
//   },
// };

// man5.name = "Dima";
// man5.mother.name = "Eva";
// man5.mother.work.position = "patient";
// man5.mother.parents[0].name = "Alone at home";

// man5FullCopy.age = 38;
// man5FullCopy.mother.age = 40;
// man5FullCopy.mother.work.experience = 25;
// man5FullCopy.mother.parents[0].age = 90;

// console.log(man5 === man5FullCopy)
// console.log(man5.mother === man5FullCopy.mother)
// console.log(man5.mother.work === man5FullCopy.mother.work)
// console.log(man5.mother.parents === man5FullCopy.mother.parents)
// console.log(man5)
// console.log(man5FullCopy)

// 9 Object inside an object -> array -> object ->  object
// let man6 = {
//   name: "John",
//   age: 28,
//   mother: {
//     name: "Kate",
//     age: 50,
//     work: {
//       position: "doctor",
//       experience: 15,
//     },
//     parents: [
//       {
//         name: "Kevin",
//         age: 80,
//         favoriteDish: {
//           title: "borscht",
//         },
//       },
//       {
//         name: "Jennifer",
//         age: 78,
//         favoriteDish: {
//           title: "sushi",
//         },
//       },
//     ],
//   },
// };

// let man6FullCopy = {
//     ...man6,
//     mother: {
//         ...man6.mother,
//         work: {...man6.mother.work},
//         parents: [...man6.mother.parents.map(e => ({...e, favoriteDish: {...e.favoriteDish}}))]
//     }
// }

// console.log(man6 === man6FullCopy)
// console.log(man6.mother === man6FullCopy.mother)
// console.log(man6.mother.work === man6FullCopy.mother.work)
// console.log(man6.mother.parents === man6FullCopy.mother.parents)
// console.log(man6.mother.parents[0].favoriteDish === man6FullCopy.mother.parents[0].favoriteDish)
// console.log(man6)
// console.log(man6FullCopy)

//10 Array of objects inside an object -> object -> array -> object ->  object
// let man7 = {
//   name: "John",
//   age: 28,
//   mother: {
//     name: "Kate",
//     age: 50,
//     work: {
//       position: "doctor",
//       experience: 15,
//     },
//     parents: [
//       {
//         name: "Kevin",
//         age: 80,
//         favoriteDish: {
//           title: "borscht",
//           ingredients: [
//             { title: "beet", amount: 3 },
//             { title: "potatoes", amount: 5 },
//             { title: "carrot", amount: 1 },
//           ],
//         },
//       },
//       {
//         name: "Jennifer",
//         age: 78,
//         favoriteDish: {
//           title: "sushi",
//           ingredients: [
//             { title: "fish", amount: 1 },
//             { title: "rise", amount: 0.5 },
//           ],
//         },
//       },
//     ],
//   },
// };

// let man6FullCopy = {
//   ...man6,
//   mother: {
//     ...man6.mother,
//     work: { ...man6.mother.work },
//     parents: [
//       ...man6.mother.parents.map((e) => ({
//         ...e,
//         favoriteDish: { ...e.favoriteDish },
//       })),
//     ],
//   },
// };

// let man7FullCopy = {
//   ...man7,
//   mother: {
//     ...man7.mother,
//     work: { ...man7.mother.work },
//     parents: [
//       ...man7.mother.parents.map((e) => ({
//         ...e,
//         favoriteDish: {
//           ...e.favoriteDish,
//           ingredients: [
//             ...e.favoriteDish.ingredients.map((e) => ({ ...e.ingredients })),
//           ],
//         },
//       })),
//     ],
//   },
// };

// console.log(man7 === man7FullCopy)
//
// console.log(man7.mother === man7FullCopy.mother)
// console.log(man7.mother.work === man7FullCopy.mother.work)
// console.log(man7.mother.parents === man7FullCopy.mother.parents)
// console.log(man7.mother.parents[0].favoriteDish === man7FullCopy.mother.parents[0].favoriteDish)
// console.log(man7.mother.parents[0].favoriteDish.ingredients === man7FullCopy.mother.parents[0].favoriteDish.ingredients)
// console.log(man7.mother.parents[0].favoriteDish.ingredients[0].title === man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title)
// console.log(man7)
// console.log(man7FullCopy)

//1 this method is sorting out of the box without additional parameters

// const str1 = ["Bob", "Alex", "John"];
//console.log(str1.sort()) //['Alex', 'Bob', 'John']

//2 it's sorts type strings alphabetically

// const str2 = ["Bob", "Alex", "John", "john", "123", "игорь", "Юрий"];
//console.log(str2.sort()) //['123', 'Alex', 'Bob', 'John', 'john', 'Юрий', 'игорь']

// const students = [
//   {
//     id: 1,
//     name: "Bob",
//     age: 22,
//     isMarried: true,
//     scores: 85,
//   },
//   {
//     id: 2,
//     name: "Alex",
//     age: 29,
//     isMarried: true,
//     scores: 89,
//   },
//   {
//     id: 3,
//     name: "Nick",
//     age: 20,
//     isMarried: false,
//     scores: 120,
//   },
//   {
//     id: 4,
//     name: "Ann",
//     age: 22,
//     isMarried: false,
//     scores: 100,
//   },
//   {
//     id: 5,
//     name: "Alex",
//     age: 23,
//     isMarried: false,
//     scores: 105,
//   },
// ];
//
// const user = {
//     name: 'Bob',
//     age: 23,
//     friends: ['Alex', 'Nick', 'John']
// }

//сортировка массива объектов по строковым значениям
//а. Регистрозависимоя

// const compareObjByName = (a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return -1;
//   }
// };

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

// let a = {
//     name: 'it-kamasutra.com',
//     protocol: 'https',
//     maxStudentsCount: 10,
//     isOnline: true,
//     students: ['Ivan', 'Andrey', 'Farid'],
//     classroom: {
//         teacher: {
//             name: 'Dima',
//             age: 18
//         }
//     }
// }
//
// let b = {...a}
// b.classroom = {...a.classroom}
// b.classroom.teacher = {...a.classroom.teacher}
// b.students = [...a.students]
// b.classroom.teacher.name = 'Dmitry'

//_______________________________________________________________________

// let user8 = {
//     name: 'John222',
//     age: 30,
//     sayHi() {
//         console.log(user8.name)
//     }
// }

// console.log(user8)
// user8.sayHi()

// let user9 = {name: 'Alex'};
// let admin = {name: 'Bob'};
//
// function f() {
//     // console.log(this.name)
// }
//
// user9.f = f
// admin.f = f

// user9.f()
// admin.f()

// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0)
//         this.b = +prompt('b?',0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//     }
// };
//
//
// let obj = {
//     a: 100,
//     b: 200,
// }
//
// let func = function(c) {
//     return this.a + this.b + c
// }
//
// let newFunc = func.bind(obj,300)
//
// console.log(newFunc())

// let userObg = {
//     '0': 'Dima',
//     '1': 'Vasa',
//     '2': 'Valera'
// }
//
//
// userObg['3'] = 100
// userObg['test'] = 'test'
//
// console.log()
//
// const usesrs = {
//     '21': {id: 21, name: 'Dima'},
//     '44': {id: 44, name: 'Vasa'},
//     '2': {id: 2, name: 'Valera'}
// }
//
// let user = {id: 88, name: 'Bob'}
// usesrs[user.id] = user;
//
// console.log(usesrs)

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// let checkFun = (a) => {
//     if(a % 2 === 0){
//        return 'Even'
//     }else {
//         return 'Odd'
//     }
// }
// checkFun(5)

//Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//
// function arrayClone(arr) {
//     return [...vegetables]
// }
//
// let arr1 = arrayClone(vegetables);

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// Получите результат двумя разными методами.
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//
// let vegetables2 = vegetables.join(', ')
// console.log(vegetables2)

//Двоеточие между нечётными числами
// const num = prompt('Введите число', 55);

// function colonOdd(num) {
//
//     let string = num.toString()
//     string = string.split('')
//     let result = '';
//     for (let i = 0; i < string.length; i++)
//         if (string[i] % 2 === 0) {
//             result += string[i] + ':'
//         } else {
//             result += string[i]
//         }
//
//     // return result
//     console.log(result)
// }
//
// colonOdd(112358812)

//Замена регистра символов

// function changeRegister(str) {
//
//     if (str === str.toUpperCase()) return
//
//     let string = str.split('')
//     let result = '';
//     for (let i = 0; i < string.length; i++)
//         if (string[i] == string.toUpperCase()) {
//             result += string[i].toLowerCase()
//         } else {
//             result += string[i].toUpperCase()
//
//         }
//     return result
//     console.log(result)
//
// }
//
// changeRegister('aBcD')

//Просто, учитывая строку слов, верните длину самого короткого слова(ов).

// let shortString = () => {
//     let str = 'Hello a beautiful word'
//     let col = 0
//     //own solution
//     //let result =  str.split(' ').reduce((a,b) => (b.length < a.length) ? b : a)
//     //let result =  str.split(' ').reduce((a,b) => ({...a, [b]: (a[b] || 0) + 1}), {})
//
//     let result = str.split(" ").sort((a, b) => a.length - b.length);
//
//     return result[0].length
//     console.log(result[0].length)
//
// }
//
// shortString()

// let user = {
//     name: 'John',
//     years: 30
// }

// let {name, years: age, isAdmin= false} = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// let result  = (salaries) => {

// }

// result()

// console.log(result)

// arr = [1, 2, 3, 4, 5]
// let [el1, el2, el, ...rest] = arr
// console.log(rest)

// arr = [1, 2, 3, 4, 5]
// let [,,,el1, el2] = arr
// console.log(el1, el2)

// let numbers = [1, 8, 98, 3, 7];

// let sumTwoSmallestNumbers = (numbers) => {
//   numbers.sort(function (a, b) {
//     return a - b;
//   });

//   let sum = numbers[0] + numbers[1];
//   return sum;
// };
//
// let sum = sumTwoSmallestNumbers(numbers);

// var a = 5
// let b = 6
// const c = 7
//
// let fun = () => {
//     return (
//         a = 8,
//             b = 10,
//             console.log(a, b)
//     )
// }
//
// {
//     a = 20
// }

// fun()
//
// console.log(a, b, c)


// let dominator = () => {
//     let arr = [3,4,3,2,3,1,3,3]
//
//     let value = null
//     let count = 0
//
//     for (let i = 0; i < arr.length; i++) {
//         if(count === 0) {
//             value = arr[i]
//             count = 1
//         } else if (arr[i] === value){
//             count ++
//         } else {
//             count --
//         }
//     }
//
//     let dominatorCount = 0;
//     for(let i =0; i < arr.length; i++) {
//         if(arr[i] === value) {
//             dominatorCount++
//         }
//     }
//
//     return dominatorCount > arr.length / 2 ? value: -1
// }
//
// dominator()
//
// console.log(dominator())


//Cloning an array
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//
// function arrayClone(vegetables) {
//     return [...vegetables]
// }
//
// console.log(arrayClone(vegetables))

//Converting an array to a string
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//
// let newVegetables = vegetables.toString()
// console.log(newVegetables)

//Colon between odd numbers
// const input = prompt('Введите число');
// let num = parseInt(input)
//
// let colonOdd = (num) => {
//
//     let numStr = num.toString()
//     let result = ''
//
//     for (let i = 0; i < numStr.length; i++) {
//         result += numStr[i]
//
//         if (parseInt(numStr[i]) % 2 !== 0 && parseInt(numStr[i + 1]) % 2 !== 0 && i !== numStr.length - 1){
//             result += ':'
//         }
//     }
//     return result
// }
//
// let result = colonOdd(num)
// console.log(result)


//Replaces the case of each character with the opposite one
// let changeRegister = (str) => {
//     let newStr = str.split([,])
//
//     let intermediateResult = newStr.map((e) => {
//         if (e === e.toLowerCase()) {
//             return e.toUpperCase()
//         } else if (e === e.toUpperCase()) {
//             return e.toLowerCase()
//         }
//     })
//
//     let result = intermediateResult.join('')
//     return result
// }
//
// console.log(changeRegister('qAzQaZ')) //QaZqAz

// let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
//
// let removeDuplicates = (arr) => {
//
//     let result = arr.filter((e, index) => {
//       return arr.indexOf(e) === index
//     })
//     return result
// }
//
// console.log(removeDuplicates(["php", "php", "css", "css", "script", "script", "html", "html", "java"]))

//Find leap years

// let chooseYears = (startYear , endYear) => {
//     let leapYears = []
//
//     for(let year = startYear; year <= endYear; year ++){
//         if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//             leapYears.push(year)
//         }
//     }
//     return leapYears
// }
//
// console.log(chooseYears(2000, 2018))

//Display items in random order

// let array = [1, 2, 3, 4, 5]
//
// let shuffle = () => {
//     return Math.random() - 0.5
// }
//
// array.sort(shuffle)
// console.log(array)

//Get the first elements of the array
// let getFirst = (arr, n) => {
//     let result = arr.slice(0, n);
//     return result
// }
//
// let arr = [1, 2, 3, 4, 5]
//
// console.log(getFirst(arr, 2))

//Get the last elements of the array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// let getLast = (array, n) => {
//     let result = array.slice(-n)
//     return result
// }
//
// console.log(getLast(array, 3))

//Sum of elements of two arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
//
// let arr3 = [];
//
// for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//     let sum = (arr1[i] || 0) + (arr2[i] || 0);
//     arr3.push(sum);
// }
//
// console.log(arr3)

//The number of duplicate elements in the array
// let varFun3 = (arr) => {
//
//     let result = {};
//     arr.forEach(item => {
//         result[item] = (result[item] || 0) + 1
//     })
//     return result
// }
//
// console.log(varFun3([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]))
//
//
// const countDuplicates = (arr) => {
//     let duplicates = {};
//     let count = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (duplicates[arr[i]]) {
//             duplicates[arr[i]] += 1;
//         } else {
//             duplicates[arr[i]] = 1;
//         }
//     }
//
//     for (let key in duplicates) {
//         if (duplicates[key] > 1) {
//             count += 1;
//         }
//     }
//
//     return count;
// };
//
// console.log(countDuplicates([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]));  // Вывод: 4
// console.log(countDuplicates([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]));  // Вывод: 3
//
// const arr = [3, 3, 7, 7, 3, 3, 4];
// let duplicates = {};
//
// for (let i = 0; i < arr.length; i++) {
//     if (duplicates[arr[i]]) {
//         duplicates[arr[i]] += 1;
//     } else {
//         duplicates[arr[i]] = 1;
//     }
// }
//
// for (let key in duplicates) {
//     console.log('Ключ:', key);
//     console.log('Значение:', duplicates[key]);
// }
//
// console.log(duplicates)

//Expanding an array of arrays
// let expand = (arr) => {
//     return arr.flat(Infinity)
// }
//
// console.log(expand([1, [2, [3, [4]]]]))
// console.log(expand([1, [2], [3, [[4], [3, [[4], [3, [[4]]], [5, 6]]], [5, 6]]], [5, 6]]))

//Merge two arrays without duplicating elements

// let union = (arr1, arr2) => {
//     let result = [];
//     let arr3 = arr1.concat(arr2)
//
//     for (let num of arr3) {
//         if (!result.includes(num)) {
//             result.push(num)
//         }
//     }
//     return result
// }
//
// console.log(union([5, 2, 1, -9, 3, 7],[5, 2, 1, -10, 8]))

//Difference between two arrays
// let union = (arr1, arr2) => {
//
//     const uniqueArr1 = arr1.filter(el => !arr2.includes(el))
//     const uniqueArr2 = arr2.filter(el => !arr1.includes(el))
//
//     return uniqueArr1.concat(uniqueArr2)
// }
//
// console.log(union([1, 2, 'a'], [1, 2, 3, 4, 'b']))

//Sorting the array in descending order
// let compareNumbers = (arr) => {
//     return arr.sort()
// }
//
// console.log(compareNumbers([3, 8, 7, 6, 5, -4, 3, 2, 1]))

//The most commonly used array element
// let arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7 , 7 , 7 , 7 , 7]
//
// let result = arr.sort((a, b) => arr.filter(e => e === a).length - arr.filter(e => e === b).length).pop()
// console.log(result)

//Sum of squares of array values
// let sumOfSquares = (arr) => {
//     const sumOfElements = arr.reduce(function(sum, element) {
//         return sum + Math.pow(element, 2); // return sum + element ** 2;
//     }, 0);
//
//     return sumOfElements
// }
//
// console.log(sumOfSquares([1, 2, 3, 4, 5]))

//Sum and product of array values
// let sumAndComposition = (arr) => {
//     let sum = arr.reduce((el, acc) => {
//         return el + acc
//     }, 0)
//
//     let composition = arr.reduce((el, acc) => {
//         return el * acc
//     }, 1)
//     return [sum ,composition]
// }
//
// console.log(sumAndComposition([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//Removing false values from an array
// let filterFalse = (arr) => {
//     let result = arr.filter(el => !!el)
//     return result
//
//     // (el => el !== false && el !== '' && el !== undefined && el !== null && !Number.isNaN(el) && el !== 0)
//     // return result
// }
//
// console.log(filterFalse([NaN, 0, 77, false, -17, '', undefined, 99, null]))

//Sorting an array of objects
// let litmir = [
//     {author: 'Хэленка', title: 'Улетела сказка'},
//     {author: 'Коул Кресли', title: 'Восстание Аркан'},
//     {author: 'Райчел Мид', title: 'Золотая лилия'}
// ];
//
//
// let titles = litmir.map(book => book.title)
// let result = titles.join(' ')
//
// console.log(result)

//Find pairs of numbers whose sum is equal to a given value
// let num = 10;
// let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
//
// let findCouple = (arr, number) => {
//     let pairs = new Set();
//
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === number) {
//                 let pair = arr[i] + ':' + arr[j];
//                 pairs.add(pair);
//             }
//         }
//     }
//
//     return pairs;
// };
//
// let result = findCouple(arr, num);
//
// result.forEach(pair => {
//     console.log('Ваша пара чисел: ' + pair);
// });

//Find all values of this property in an array of objects
// let litmir = [
//     {author: 'Хэленка', title: 'Улетела сказка'},
//     {author: 'Коул Кресли', title: 'Восстание Аркан'},
//     {author: 'Райчел Мид', title: 'Золотая лилия'}
// ];
//
// let propertyValue = (array, key) => {
//     let titles = array.map(e => e.title)
//     let authors = array.map(e => e.author)
//
//     if (key === 'title') {
//         return titles
//     } else if (key === 'author') {
//         return authors
//     }
// }
//
// console.log(propertyValue(litmir, 'title'))

//A common starting substring in an array of strings
// let startingSubstring = (arr) => {
//     const charts = arr[0].split('');
//
//     return charts.reduce((result, chart) => {
//         const isEvery = arr.every(itemArr => itemArr.startsWith(result + chart));
//         return isEvery ? (result + chart) : result;
//     }, '');
// }
// console.log(startingSubstring(['Репа', 'Редиска']))

//Remove a specific element from the array
// let removeItem = (arr, num) => {
//     const numberToDelete = num
//     const result = arr.filter(el => el !== numberToDelete)
//     return result
// }
// console.log(removeItem([3, 5, 7, 8, 5], 5))

//Return a random element from the array
// let randomElement = (arr) => {
//     return arr[Math.floor(Math.random()*arr.length)]
// }
//
// console.log(randomElement([24, 45, 22, 35, 43]))

//An array with a specified number of elements
// let arrayFilled = (len, value) => {
//     let result = Array(len).fill(value)
//     return result
// }
// console.log(arrayFilled(4, 12))
//Move an array element from one position to another
// let moveElement = (arr, from, to) => {
//     const element = arr.splice(from, 1)[0]
//     arr.splice(to, 0, element)
//     return arr
// }
// console.log(moveElement([ 'a', 'b', 'c', 'd', 'e'], 4, 1))

//Array of the specified length
// let generateNumbers = (start, len) => {
//     let arr = []
//
//     for (let i = 0; i < len; i++) {
//         const number = start + i;
//         arr.push(number)
//     }
//     return arr
// }
// console.log(generateNumbers(-5, 4))

//Array of lengths of string elements
// let vegetables = (arr) => {
//     //let arrLength = []
//     // for (let i = 0; i < arr.length; i++) {
//     //     arrLength[i] = arr[i].length
//     // }
//     // return arrLength
//
//     let result = arr.map(el => el.length)
//     return result
// }
// console.log(vegetables(['Капуста', 'Репа', 'Редиска', 'Морковка']))

//Array of sums of numbers
// let currentSums = (numbers) => {
//     let result = numbers.reduce((el, acc, index) => {
//         if(index === 0) {
//             el.push(acc)
//         } else {
//             const sum = acc + el[index -1]
//             el.push(sum)
//         }
//         return el
//     }, [])
//
//     return result
// }
// console.log(currentSums([2, 3, 5, 7, 11, 13, 17]))

//Equal in sum pairs of numbers
// let sumSeven = (numbers) => {
//
//     const targetSum = 7
//     const pairs = []
//
//     for (let i = 0; i < numbers.length; i++) {
//         const num1 = numbers[i];
//
//         for (let j = i + 1; j < numbers.length; j++) {
//             const num2 = numbers[j];
//             const sum = num1 + num2;
//
//             if (sum === targetSum) {
//                 const pair = `${num1}:${num2}`;
//                 pairs.push(pair);
//             }
//         }
//     }
//
//     return pairs;
// }
// console.log(sumSeven([0, 1, 2, 3, 4, 5, 6, 7]))

//Array of the first letters
// let firstSymbol = (str) => {
//
//     let result = str.split(' ')
//         .filter((el) => (el !== '' ? true : false))
//         .map(el => el.charAt(0))
//
//     return result
// }
// console.log(firstSymbol("Каждый охотник желает знать, где сидит фазан."))

//Array of strings of three characters
// let threeCharacters = (str) => {
//     let result = Array.from(str)
//         .map((el, index, arr) => {
//             const prevChar = arr[index - 1] || '';
//             const nextChar = arr[index + 1] || '';
//             return prevChar + el + nextChar
//         })
//     return result
// }
// console.log(threeCharacters('JavaScript'))

//Get an array of numbers in descending order
// let sortArray = (arr) => {
//     return arr.sort((a, b) => b - a)
// }
// console.log(sortArray([5, 7, 2, 9, 3, 1, 8]))

//Merging Arrays
// let mergeArray = (arr1, arr2, arr3) => {
//     let tempResult = arr1.concat(arr2, arr3)
//     let result = tempResult.sort((a, b) => b - a)
//     return result
// }
// console.log(mergeArray([5, 2], [2, 1], [4, 3]))








