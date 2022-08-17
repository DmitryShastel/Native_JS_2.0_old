let sum = 0;

let f1 = (x, y) => {
    let sum = x + y;
    return sum;
}

f1(1, 2);
f1(1, 3);
console.log(1 + 2 + 8 + f1(1, 2))

// let f2 = () => {
//     console.log(2);
//     return 15;
// }

// f2();
// console.log(5 + f2());