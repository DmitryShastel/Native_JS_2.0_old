import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';


type  EditableSpanType = {
    oldTitle: string
    callback: (updateTitle: string) => void
}

export const EditableSpan7 = (props: EditableSpanType) => {


    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)

    const onDoubleClickHandler = () => {
        setEdit(!edit)
        if (edit) {
            addTask()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.callback(updateTitle)

    };

    return (
        edit
            ? <TextField
                variant="standard"
                type='text'
                value={updateTitle}
                onBlur={onDoubleClickHandler}
                autoFocus
                onChange={onChangeHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};
