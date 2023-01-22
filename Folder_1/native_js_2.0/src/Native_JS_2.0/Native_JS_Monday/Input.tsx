import React, {ChangeEvent, useState} from 'react';


type InputType = {
    addMessage: (title: string) => void
}


export const Input = (props: InputType) => {
    let [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
    }

    return (
        <div>
            <input onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>

        </div>
    );
};

