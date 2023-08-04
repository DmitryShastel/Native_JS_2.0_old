import React from 'react';
import {homeWorkReducer} from "./homeWorkReducer";

export type ActionType = {
    type: string
    payload: string | number
}

export type StateType = {
    _id: number
    name: string
    age: number
}
let initialState: StateType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    console.log(newState);
    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toEqual('Виктор');
    expect(newState[2].name).toEqual('Дмитрий');
    expect(newState[3].name).toEqual('Ирина');
    expect(newState[4].name).toEqual('Кот');
    expect(newState[5].name).toEqual('Коля');
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});
    expect(newState[0].name).toBe('Кот');
    expect(newState[1].name).toBe('Коля');
    expect(newState[2].name).toBe('Ирина');
    expect(newState[3].name).toBe('Дмитрий');
    expect(newState[4].name).toBe('Виктор');
    expect(newState[5].name).toBe('Александр');
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState[0].age).toBe(66);
    expect(newState[1].age).toBe(44);
    expect(newState[2].age).toBe(40);
    expect(newState[3].age).toBe(55);
});
