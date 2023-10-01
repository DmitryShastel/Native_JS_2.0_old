import React, {useState} from 'react';
import {TodoListTuesday} from "./TodoList_Tuesday";
import {v1} from "uuid";

export const AppRootTuesday = () => {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])


    return (
        <div>
            <TodoListTuesday/>
        </div>
    );
};