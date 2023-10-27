import React, {useState} from 'react';

type EditableSpanTuesdayType = {
    oldTitle: string
    callBack: () => void
}


export const EditableSpanTuesday = (props: EditableSpanTuesdayType) => {

    const [updateTitle, updateSetTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)


    const activateEditMode = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input value={updateTitle} onBlur={activateEditMode} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{props.oldTitle}</span>
    );
};