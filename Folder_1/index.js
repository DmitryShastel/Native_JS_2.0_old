let a = +prompt('The first number');
let b = +prompt('The second number');

let c = (a > 0) ?  (a * b) : (a < 0) ? (b + a): 'error';

console.log(c);  
