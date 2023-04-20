import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type AddItemFormType = {
    title: string
    removeTodolist: (id: string) => void
    addTask: (title: string, todolistId: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {

    let [title, setTitle] = useState(" ")


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask();
        }
    }


    return (
        <div>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+
                </button>
                {error && <div className={"error-message"}>{error}</div>}
            </div>
        </div>
    )
}