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

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Books', isDone: true},
            {id: v1(), title: 'Food', isDone: true},
            {id: v1(), title: 'Things', isDone: true},
        ]
    })


    return (
        <div>
            <TodoListTuesday/>
        </div>
    );
};