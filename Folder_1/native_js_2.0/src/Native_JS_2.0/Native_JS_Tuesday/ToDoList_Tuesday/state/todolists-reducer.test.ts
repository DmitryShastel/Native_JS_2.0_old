import {v1} from 'uuid';
import {ToDoListsType} from "../App_Root_Tuesday";
import {addTodolistAC, changeTodolistTitleAC, removeTodolistAC, todolistsReducer} from "./todolists-reducer";

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<ToDoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(startState.length).toBe(2);
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
    expect(endState[0].title).toBe("What to buy");
    expect(endState[0].filter).toBe("all");
    expect(endState[0]).toEqual({id: todolistId2, title: "What to buy", filter: "all"});
    expect(endState[1]).toBeUndefined();
    expect(startState[0]).not.toEqual(endState[0]);
    expect(endState).toHaveLength(1);
    expect(endState.some((todolist) => todolist.id === todolistId1)).toBe(false);
    expect(endState.some((todolist) => todolist.id === todolistId2)).toBe(true);
})

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let todolistId3 = v1();

    let newTodolistTile = 'todolistTitle'

    const startState: Array<ToDoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTile))


    //expected results regarding new added id(s) can be checked in case if new id(s) is hardcode,
    // not thought library v1()
    expect(startState.length).toBe(2);
    expect(endState.length).toBe(3);
    expect(endState[0].id).toBe(todolistId1);
    expect(endState[1].id).toBe(todolistId2);
    expect(endState[2].id).toBe(todolistId3);
    expect(endState[2].title).toBe('todolistTitle');
    expect(endState[0].filter).toBe("all");
    expect(endState[2]).toEqual({id: todolistId3, title: 'todolistTitle', filter: "all"});
    expect(endState[3]).toBeUndefined();
    expect(startState).not.toEqual(endState);
    expect(endState).toHaveLength(3);
    expect(endState.some((todolist) => todolist.id === todolistId1)).toBe(true);
    expect(endState.some((todolist) => todolist.id === todolistId2)).toBe(true);
    expect(endState.some((todolist) => todolist.id === todolistId3)).toBe(true);
})

test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<ToDoListsType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    // const action = {
    //     type: 'CHANGE-TODOLIST-TITLE',
    //     id: todolistId2,
    //     title: newTodolistTitle
    // };

    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle));

    //expected results regarding new added id(s) can be checked in case if new id(s) is hardcode,
    // not thought library v1()
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});
