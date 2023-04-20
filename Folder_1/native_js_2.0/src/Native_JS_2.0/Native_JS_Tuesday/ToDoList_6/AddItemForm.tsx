import React, {useState} from 'react';





export const AddItemForm = () => {

    let [title, setTitle] = useState(" ")
    let [error, setError] = useState<string | null>(null)


    return (
        <div>
            <h3>{props.title}
                <button onClick={removeTodolist}>x</button>
            </h3>
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