import React, {ChangeEvent, useState} from 'react';


type  EditableSpanType = {
    oldTitle: string
    callback: (updateTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {


    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)

    const onDoubleClickHandler = () => {
        setEdit(!edit)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(e.currentTarget.value)
        addTask()
    }

    const addTask = () => {
        props.callback(updateTitle)
    };

    return (
        edit
            ? <input
                type='text'
                value={updateTitle}
                onBlur={onDoubleClickHandler}
                autoFocus
                onChange={onChangeHandler}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};
