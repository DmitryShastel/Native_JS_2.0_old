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

let faq = (x) => {
    if(x === 1) {
        return x
    }
    return x * faq(x -1)
}
console.log(faq(5))












