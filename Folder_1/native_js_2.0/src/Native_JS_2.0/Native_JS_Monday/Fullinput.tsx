import React, {ChangeEvent, useState} from "react"


type FullinputType = {
    addMessage: (title: string) => void
}

export const Fullinput = (props: FullinputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
    }

    return (
        <div className='block'>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}