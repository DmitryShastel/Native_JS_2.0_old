// let i = +prompt('Enter number', '0');

// while(i < 100) prompt('Enter the number again');
// i = (i >= 100) ? console.log('Красава') :
// i = (i == null) ? console.log('Canceled') : 'error2';


// { 
//     i =  (i < 100) ? prompt('Enter the number again') : 'error1'; 
//     i = (i >= 100) ? console.log('Красава') :
//     i = (i == null) ? console.log('Canceled') : 'error2';
// }

let num;

do {
    num = prompt('Enter the number more then 100', 0);
} while (num <= 100 && num);