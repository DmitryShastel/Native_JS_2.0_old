// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): any {
    if(a === b && b === c && c === a) {
        return '10'
    }  else if (b === c && c === b && c !== a || a === b && b === a && c !== a  ||  a === c && b !== a && c === a)  {
        return '01'
    } else if (a !== b && b !== c && c !== a) {
        return '11'
    } else {
        return '00'
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    let result = String(number) // '21'
        .split('')
        .map(e => +e)
        .reduce((acc, el) => acc + el )
    return result
}