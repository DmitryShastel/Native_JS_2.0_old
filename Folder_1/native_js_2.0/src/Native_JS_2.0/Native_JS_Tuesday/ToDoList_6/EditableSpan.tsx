import React, {ChangeEvent, useState} from 'react';


type  EditableSpanType = {
    oldTitle: string
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
