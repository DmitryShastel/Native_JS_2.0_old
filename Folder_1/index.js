let a = +prompt('The first number');
let b = +prompt('The second number');

let c = (a < b) ?  (a++ , b--) : (a > b) ? (b++, a--): (a === b) ? (a++, b++) :'error';


console.log(a);     
console.log(b);