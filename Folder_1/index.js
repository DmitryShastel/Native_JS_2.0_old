    let a = +prompt('Enter the first number');
    let b = +prompt('Enter the second number');

    let c = (a == 0 || b == 0) ? 'Incorrect' :
    (Math.sign(a) != Math.sign(b)) ? 'This is different value' :
    (Math.sign(a) === Math.sign(b)) ? 'The same value' : 'ww';


    console.log(a);
    console.log(b);
    console.log(c);