import React, {MouseEvent}  from 'react';



export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('the user should be deleted')
    }

    const saveUser = () => {
        alert('the user is saved')
    }

    const onChangeName = () => {
        console.log('name is changed')
    }

    return (
        <div>
            <textarea onChange={onChangeName}>Dima</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}