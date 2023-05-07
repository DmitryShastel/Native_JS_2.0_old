import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';


type AddItemFormType = {
    callBack: (title: string) => void
}


export const AddItemForm7 = (props: AddItemFormType) => {

    let [title, setTitle] = useState(" ")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        let newTitle = title.trim()
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

    const buttonStyle = {
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px',
        //backgroundColor: 'green'
    }

    return (
        <div>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <Button
                    style={buttonStyle}
                    size='small'
                    variant='contained'
                    color='primary'
                    onClick={addTask}>+</Button>
                {error && <div className={"error-message"}>{error}</div>}
            </div>
        </div>
    )
}