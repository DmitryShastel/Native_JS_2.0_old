import {v1} from "uuid";
import {TodolistType } from "../AppRoot_9";
import {FilterValuesType } from "../AppRoot_9";
import {TodolistsReducer, addTodolistAC, removeTodolistAC, changeTodolistAC, changeFilterAC} from "./todolists-reducer";


test.skip('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    
    const endState = TodolistsReducer(startState,  removeTodolistAC(todolistId1))


    expect(endState.length).toBe(1);
<<<<<<< HEAD
    expect(endState[0].id).toBe(todolistId2);
});
=======
    expect(endState[0].id).toBe(todolistId2);    
});


test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolist = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    
    const endState = TodolistsReducer(startState,  addTodolistAC(newTodolist))


    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolist);    
}) ;

test('correct todolist name should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    
    const endState = TodolistsReducer(startState,  changeTodolistAC(todolistId2, newTodolistTitle))


    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe('What to learn');   
    expect(endState[1].title).toBe(newTodolistTitle); 
}) ;

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = 'completed'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    
    const endState = TodolistsReducer(startState,  changeFilterAC(todolistId2, newFilter))


    expect(endState.length).toBe(2);
    expect(endState[0].filter).toBe('all');   
    expect(endState[1].filter).toBe(newFilter); 
}) ;
>>>>>>> b8c0aaa1eaddaf4c00fcbf49041425f3edd9d62b
