import {UserType} from "./AddUser";
import {v1} from "uuid";


let initialState: UserType[]

beforeEach(() => {
    initialState= [
        {id: v1(), name: 'Bob'},
        {id: v1(), name: 'Alex'}
    ]
})

// test.skip('add one user', () => {
//     // const oneUser = addUser(initialState,2)
//     expect(oneUser.length).toBe(3)
// })