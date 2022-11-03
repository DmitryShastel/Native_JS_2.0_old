import React, {ChangeEvent, useState} from "react"


type InputType = {
    addMessage: (title: string) => void
}

export const Fullinput = (props: InputType) => {
    let[title, setTitle] = useState('')

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }


    return (
        <div className='block'>
            <input onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}