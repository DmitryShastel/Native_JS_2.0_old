// let a = () => {
//     console.log('Hello')
// }

// a();

// let showMessage = () => {
//     let message = 'Hi I am JS';
//     console.log(message);
// }

// showMessage();

// let userName = 'Vasa';

// let showName = () => {
//     let message = 'Hi ' + userName;
//     console.log(message)
// }

// showName();

// let userName = 'Vasa';

// let showName = () => {
//     let userName = 'Peta'
//     let message = 'Hi ' + userName;
//     console.log(message)
// }


// showName();
// console.log(userName)

// let showMessage = (from, text) => {
//     console.log(from + ': ' + text);
// }

// showMessage('Anna', 'Hi');
// showMessage('Anna', 'How is going');

// let showMessage = (from, text) => {
//     from = '*' + from + '* ';
//     console.log(from + ': ' + text); 
// }

// from = 'Anna';
// showMessage(from, 'Hi');

// let sum = (a, b) => {
//     return a + b;
// }

// let result = sum(1, 2);
// console.log(result);

let n = 5;

let snowPrimes = (n) => {
    nextPrime: for (let i = n; i < n; i++){
        for(let j = 2; j < i; j++){
            if(i % j == 0) continue nextPrime;
        }
        console.log(nextPrime)
    }
}

snowPrimes(snowPrimes);