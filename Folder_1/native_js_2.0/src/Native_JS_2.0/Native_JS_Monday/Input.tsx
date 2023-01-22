import React, {ChangeEvent, useState} from 'react';


type InputType = {
    addMessage: () => void
}


export const Input = (props: InputType) => {
    let [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeHandler}/>
            <button onClick={props.addMessage}>+</button>

        </div>
    );
};

