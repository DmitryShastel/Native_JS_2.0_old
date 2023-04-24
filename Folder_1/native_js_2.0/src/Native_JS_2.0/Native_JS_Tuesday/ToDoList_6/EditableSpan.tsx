import React, {useState} from 'react';


type  EditableSpanType = {
    title: string
}

export const EditableSpan = (props: EditableSpanType) => {

    const [edit, setEdit] = useState(false)

    return (
        edit
            ? <input type='text'/>
            : <span>{props.title}</span>
    );
};
