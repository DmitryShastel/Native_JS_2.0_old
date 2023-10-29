import {userReducer} from "./user-reducer";

test('user reducer should increment only age', () => {

    const startState = {age: 20, childrenCount: 2, name: 'Dima'}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
    expect(endState.name).toBe('Dima');
    expect(endState).not.toBe(startState);
    expect(typeof endState.age).toBe('number');
    expect(typeof endState.childrenCount).toBe('number');
    expect(typeof endState.name).toBe('string');
    expect(Object.keys(endState).length).toBe(3);
})