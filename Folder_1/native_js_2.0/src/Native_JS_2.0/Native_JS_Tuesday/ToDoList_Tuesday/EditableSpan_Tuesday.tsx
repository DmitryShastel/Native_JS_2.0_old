import React, {ChangeEvent, useState} from 'react';

type EditableSpanTuesdayType = {
    oldTitle: string
    callBack: (updateTitle: string) => void
}


export const EditableSpanTuesday = (props: EditableSpanTuesdayType) => {

    const [updateTitle, updateSetTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)


    const activateEditMode = () => {
        setEdit(!edit)
        if(edit) {
            addTaskTitleHandler()
        }
    }

    const addTaskTitleHandler = () => {
        props.callBack(updateTitle)
    }

    const onChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateSetTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input onChange={onChangeTaskTitleHandler} value={updateTitle} onBlur={activateEditMode} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{props.oldTitle}</span>
    );
};