let a = +prompt('The first number');
let b = +prompt('The second number');

let c = (a < b) ?  (-(a - b) + ' ' + 'Extra tables') : (a > b) ? (-(b - a) + ' ' + 'The chairs is not enough')  : 'error';


console.log(c);     