import React, {useState} from 'react';


type  EditableSpanType = {
    oldTitle: string
}

export const EditableSpan = (props: EditableSpanType) => {


    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)

    const onDoubleClickHandler = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input type='text' value={updateTitle} onBlur={onDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};
