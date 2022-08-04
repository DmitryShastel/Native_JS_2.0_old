let a = +prompt('The first number');

let c = (a >= 6 && a <= 9) ?  'Morning' : 
 (a >= 10 && a <= 17) ? 'Noon' : 
 (a >= 18 && a <= 22) ? 'Evening' : 
 (a == 23 || a == 24) ? 'Night'  : 
 (a >= 1 && a <= 5) ? 'Night'  : 'error';

console.log(c);  
// a >= 23 &&