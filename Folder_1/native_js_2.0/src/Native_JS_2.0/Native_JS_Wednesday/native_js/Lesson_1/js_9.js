// let car = 'bmw'
//
// let startEngine = () => {
//     console.log(`Start ${car}`)
// }
//
// car = 'audi'
//
// startEngine()

// const a = 10;
// const b = 20;
// const c = 50;
//
// function foo() {
//     const a = 30;
//     const b = 40;
//     console.log(a, b)
//     foo2();
//     const bar = () => {
//         console.log(c)
//     }
//     bar();
// }
//
// foo()
//
// function foo2() {
//     console.log(b)
// }

// let count = 0;
//
// const counterCreator = () => {
//
//     return () => {
//         console.log(++count);
//     }
// }
//
// const counter = counterCreator();
// const counter2 = counterCreator();
// counter()
// counter()
// counter()
//
// counter2()
// counter2()
// counter2()

// let fun = (x, n) => {
//     if (n === 1) {
//         return x
//     } else {
//         return x * fun(x, n - 1)
//     }
// }
//
// console.log(fun(2, 4))

//faq(5) -> 1 * 2 * 3 * 4 * 5
// let faq = (x) => {
//     if(x === 1) {
//         return x
//     }
//     return x * faq(x -1)
// }
// console.log(faq(5))

//fib(5) -> 0 + 1 + 1 + 2 + 3 + 5

// let fib = (x) => {
//   if (x <= 0){
//       return 0
//   } else if (x === 1) {
//       return 1
//   }
//   return fib(x-1) + fib(x-2)
//
// }
// console.log(fib(15))

// const createCounter = () => {
//
//     let a = 0;
//
//     const counter = {
//         increment() {++a },
//         getCounter() {return a}
//     }
//     return counter
// }
//
// const counter1 = createCounter()
// const counter2 = createCounter()
//
// counter1.increment()
// counter1.increment()
// counter2.increment()
// console.log(counter2.getCounter())

// let fun = (m) => {
//     return (n) => {
//         console.log(n + m)
//     }
// }
//
// let result = fun(3)(2)

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++
//     }
// }
// let counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())

// let sum = (a) => {
//     return (b) => {
//         return a + b
//     }
// }
//
// console.log(sum(5)(-1))

// const person1 = {name: 'Misha', age: 25, job: 'any'}
// const person2 = {name: 'Misha2', age: 22, job: 'any2'}
//
// function bind (person, fun) {
//      return function () {
//         fun.call(person)
//      }
// }
//
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const boundLogPerson = bind(person1, logPerson)
// boundLogPerson()

// function volume(a) {
//     return (b, c) => {
//         return console.log(a * b * c)
//     }
// }
//
// let result = volume(2)
// result(3,3)
// volume(2)(3,3)

// const module = ( () => {
//    let privateMethod = () => {
//        console.log('hello')
//    }
//    return {
//        publicMethod: () => {
//            privateMethod()
//            console.log('hello2')
//        }
//    }
// }) ();
// module.publicMethod()

// let fun = (x, n) => {
//     if (n === 1) {
//         return x
//     } else {
//         return x * fun(x, n - 1)
//     }
// }
//
// console.log(fun(2, 4))

// let sumTo = (n) => {
//     if(n === 1) {
//         return n
//     } else {
//         return n + sumTo(n -1)
//     }
// }
//
// console.log(sumTo(100))

// let fib = (n) => {
//     if (n <= 1) {
//         return n
//     } else {
//         return fib(n - 1) + fib(n - 2)
//     }
// }
// console.log(fib(7))

// let sum = (a) => {
//     return (b) => {
//         return a + b
//     }
// }
// console.log(sum(3)(6))

let makeCounter = () => {
    let count = 0
    return () => {
        console.log(++count)
    }
}

let counter = makeCounter()
counter()
counter()

let counter2 = makeCounter()
counter2()
counter()