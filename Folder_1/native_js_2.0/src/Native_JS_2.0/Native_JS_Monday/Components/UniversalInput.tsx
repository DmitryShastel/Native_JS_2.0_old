import React, {ChangeEvent} from 'react';

type InputType = {
    setNewTitle: (newTitle: string) => void
    newTitle: string
}


export const UniversalInput = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
        e.currentTarget.value = ''
    }

    return (
        <input value={props.newTitle} onChange={onChangeHandler}/>
    )
}