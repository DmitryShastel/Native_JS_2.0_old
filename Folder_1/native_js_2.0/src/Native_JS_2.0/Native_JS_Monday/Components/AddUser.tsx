import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";


type UserType = {
    id: string
    name: string
}


export const AddUser = () => {

    let [users, setUsers] = useState<UserType[]>([])
    let [name, setName] = useState('')
    let [error, setError] = useState<string | null>(null)

    const totalUsers = users.length
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)
    }

    const addUser = () => {
        let user = {id: v1(), name: name}

        if (name.trim() !== '') {
            setUsers([...users, user])
            alert('Hello' + ' ' + `${name}`)
            console.log(user)
            setName('')
        } else {
            setError('The name is required')
        }
    }

    const onEnter = (e: KeyboardEvent | React.KeyboardEvent) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    return (
        <div>
            <input
                value={name}
                onChange={onChangeHandler}
                onKeyDown={onEnter}
                className={error ? 'error' : ''} />
            <button onClick={addUser}>Add</button>
            {error && <div className={'error-message'}>{error}</div>}
            <div>Count:{totalUsers}</div>
        </div>

    );
};