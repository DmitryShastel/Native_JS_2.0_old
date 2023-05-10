import {UserReducer} from "./user-reducer";

test('user reducer should increment only age', () => {
    const startState = {
        age: 20,
        childrenCount: 2,
        name: 'Dimych'
    }

    const endState = UserReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})