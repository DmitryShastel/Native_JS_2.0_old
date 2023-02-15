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

export function getTriangleType(a: number, b: number, c: number): any {
    if (a === b && b === c && c === a) {
        return '10'
    } else if (b === c && c === b && c !== a || a === b && b === a && c !== a || a === c && b !== a && c === a) {
        return '01'
    } else if (a !== b && b !== c && c !== a) {
        return '11'
    } else {
        return '00'
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let result = String(number) // '21'
        .split('')
        .map(e => Number(e))
        .reduce((acc, el) => acc + el)
    return result
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): any => {
    let result1 = arr.map((el, index) => {
        return index % 2 === 0 ? el : 0
    }).reduce((acc, el) => {
        return acc + el
    })
    let result2 = arr.map((el, index) => {
        return index % 2 !== 0 ? el : 0
    }).reduce((acc, el) => {
        return acc + el
    })
    if (result1 > result2) {
        return true
    } else {
        return false
    }
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): any {
    let result = array.map((el) => {
        if (el % 1 == 0 || el !== 0 || Number.isInteger(el) == true) {
            return el * el
        } else {
            return 0
        }

    })
    return result
}

// el % 1 === 0