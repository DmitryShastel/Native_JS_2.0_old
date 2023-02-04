import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";


type UserType = {
    id: string
    name: string
}


export const AddUser = () => {

    let [users, setUsers] = useState<UserType[]>([])
    let [name, setName] = useState('')

    const totalUsers = users.length
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const addUser = () => {
        let user = {id: v1(), name: name}
        setUsers([...users, user])
    }

    return (
        <div>
            <input value={name} onChange={onChangeHandler}/>
            <button>Add</button>
            <div>Count:{totalUsers}</div>
        </div>

    );
};