let a = +prompt('The first number');
let b = +prompt('The first number');
let c = +prompt('The first number');

let d = (a > 0 && a <= 89 && b > 0 && b <= 89 && c > 0 && c <= 89) ?  'Triangle' : 'error';
let e = (a == 30 || 60 || 90  && b == 30 || 60 || 90  && c == 30 || 60 || 90) ?  'Triangle' : 'error';
let f = (a > 90  || ( b > 90  || c > 90))  ?  'Triangle' : 'error';


console.log(d);  
console.log(e);  
console.log(f);