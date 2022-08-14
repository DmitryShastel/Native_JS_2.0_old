let min = (a, b) => {
    a < b ? console.log(a) : 'vice verse';
    b < a ? console.log(b) : 'vice verse2';
    b == a ? console.log(b) : 'vice verse3';
}

min(2, 5);
min(3, -1);
min(1, 1);