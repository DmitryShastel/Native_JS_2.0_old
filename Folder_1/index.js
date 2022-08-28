//Write a method that returns an object composed of key-value pairs.
let arr = [['a', 1]];

let = result = (arr) => arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
        acc[value[0]] = value[1];
    }
    return console.log(acc);
}, {});

result(arr);