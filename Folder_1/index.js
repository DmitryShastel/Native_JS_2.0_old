let a = +prompt('The first number');

let c = (a === 1 || a === 2) ?  'неудовлетворительно' :
 (a === 3) ? 'удовлетворительно' : 
 (a === 4) ? 'хорошо' :
 (a === 5) ? 'отлично' : 'error';

console.log(c);  
