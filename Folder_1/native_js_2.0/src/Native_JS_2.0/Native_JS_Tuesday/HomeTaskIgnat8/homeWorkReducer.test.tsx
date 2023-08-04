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
        {_id: 0, name: "Cot", age: 3},
        {_id: 1, name: "Alex", age: 66},
        {_id: 2, name: "Kolya", age: 16},
        {_id: 3, name: "Victor", age: 44},
        {_id: 4, name: "Dima", age: 40},
        {_id: 5, name: "Ira", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort-up", payload: "up"});

    console.log(newState);
    expect(newState[0].name).toEqual('Alex');
    expect(newState[1].name).toEqual('Cot');
    expect(newState[2].name).toEqual('Dima');
    expect(newState[3].name).toEqual('Ira');
    expect(newState[4].name).toEqual('Kolya');
    expect(newState[5].name).toEqual('Victor');
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort-down", payload: "down"});
    expect(newState[0].name).toBe('Victor');
    expect(newState[1].name).toBe('Kolya');
    expect(newState[2].name).toBe('Ira');
    expect(newState[3].name).toBe('Dima');
    expect(newState[4].name).toBe('Cot');
    expect(newState[5].name).toBe('Alex');

    console.log(newState)
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState[0].age).toBe(66);
    expect(newState[1].age).toBe(55);
    expect(newState[2].age).toBe(44);
    expect(newState[3].age).toBe(40);

    console.log(newState)
});
