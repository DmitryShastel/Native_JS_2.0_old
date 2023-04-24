import React, {useState} from 'react';


type  EditableSpanType = {
    oldTitle: string
}

export const EditableSpan = (props: EditableSpanType) => {


    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)

    return (
        edit
            ? <input type='text'/>
            : <span>{props.oldTitle}</span>
    );
};
