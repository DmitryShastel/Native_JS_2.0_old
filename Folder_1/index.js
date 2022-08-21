let numbers1 = [];
let numbers2 = [];


numbers1[0] = 1;
numbers1[1] = 2;
numbers1[2] = 3;
numbers1[3] = 4;
numbers1[4] = 5;

numbers2[0] = 'a';
numbers2[1] = 'b';
numbers2[2] = 'c';
numbers2[3] = 'd';
numbers2[4] = 'e';


// add
// numbers.unshift('buy1');
// numbers.push('hello');

// delete
// let lastNumber = numbers.pop();
// let firstNumber = numbers.shift();

//merge
//let mergeArrs = numbers1.concat(numbers2);

//join to string
// let joinString = numbers1.join(' ');

//get random number
// let randomNumber = Math.floor(Math.random(numbers1) * 5);
 

// console.log(numbers1);
// console.log(numbers2);
// console.log(randomNumber);

let noun1 = ['1', '2', '3', '4'];
let adjective1 = ['a', 'b', 'c', 'd'];
let noun2 = ['q', 'w', 'e', 'r'];
let comparing1 = ['a', 's', 'd', 'f'];

let noun = noun1[Math.floor(Math.random() * 4)];
let adjective = adjective1[Math.floor(Math.random() * 4)];
let noun3 = noun2[Math.floor(Math.random() * 4)];
let comparing = comparing1[Math.floor(Math.random() * 4)];

let result = ['У тебя', noun, 'еще более', adjective, 'чем', noun3, comparing].join(' ');
console.log(result);

