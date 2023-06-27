import React, {ChangeEvent,KeyboardEvent, useState} from 'react';


type AddItemFormType = {
    callBack: (title: string) => void
}


export const AddItemForm = (props: AddItemFormType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        debugger
        let newTitle=  title.trim()
        if (newTitle !== "") {
            props.callBack(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
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