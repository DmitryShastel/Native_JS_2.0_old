import React from 'react';

type AgesType = Array<number>
type AgesType2 = Array<number | string | boolean>

let ages: AgesType = [12, 2, 5, 88]
let ages2: AgesType2 = [12, 2, 5, 88, 'aa', true]


// type ArraysType = {
//     name?: string
//     height?: number
//     model?: string
//     year?: number
// }


interface IMan {
    name: string
    height: number
    surname?: string
}

interface ICar {
    model: string
    year: number
}

let man1: IMan = {name: 'Dima', height: 1.78, surname: 'test'}
let man2: IMan = {name: 'Alex', height: 1.78}
let car1: ICar = {model: 'BMW', year: 2022}

type IArr = Array<IMan>
let arr: IArr = [
    {name: 'Dima', height: 1.78},
    {name: 'Alex', height: 1.78}
]
let toUpperCase = (strings: Array<string>): Array<string> => {
    let result = strings.map(s => s.toString());
    return result;
}
type  CreateManType = {
    name: string
    height: number

}
let createMan = (name: string, height: number): CreateManType => {
    return {
        name, height
    }
}
let car: CarType = {
    model: 'BMW',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model: string) {
        this.model = model
    }

}
type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void
}
type GarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<CarType>
}
let createGarage = (): GarageType => {
    let _cars: Array<CarType> = [];

    return {
        addCar(car: CarType) {
            _cars.push(car);
        },
        logAllCarsNames() {
            _cars.forEach(c => c.model)
        },
        getAllCars() {
            return _cars
        }
    }
}


const usesrs = {
    '21': {id: 21, name: 'Dima'},
    '44': {id: 44, name: 'Vasa'},
    '2': {id: 2, name: 'Valera'}
}

















