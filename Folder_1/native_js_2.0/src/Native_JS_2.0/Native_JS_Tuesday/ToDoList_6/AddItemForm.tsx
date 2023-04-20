import React, {ChangeEvent,KeyboardEvent, useState} from 'react';


type AddItemFormType = {
    todolistId: string
    addTask: (title: string, todolistId: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {

    let [title, setTitle] = useState(" ")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title, props.todolistId);
            setTitle("");
        } else {
            setError("Title is requared");
        }
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
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