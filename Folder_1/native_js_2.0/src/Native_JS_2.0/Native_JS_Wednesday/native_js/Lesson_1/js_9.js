// let car = 'bmw'
//
// let startEngine = () => {
//     console.log(`Start ${car}`)
// }
//
// car = 'audi'
//
// startEngine()

const a = 10;
const b = 20;
const c = 50;

function foo() {
    const a = 30;
    const b = 40;
    console.log(a, b)
    foo2();
    const bar = () => {
        console.log(c)
    }
    bar();
}

foo()

function foo2() {
    console.log(b)
}