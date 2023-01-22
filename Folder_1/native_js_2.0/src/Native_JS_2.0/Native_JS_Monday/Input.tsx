import React, {ChangeEvent, useState} from 'react';


export const Input = () => {
    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div>
            <input onChange={onChangeHandler}/>
            <button onClick={() => {}}>+</button>

        </div>
    );
};

