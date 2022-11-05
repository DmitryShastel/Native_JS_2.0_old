import React, {ChangeEvent, useState} from "react"


type FullinputType = {
    addMessage: () => void
}

export const Fullinput = (props: FullinputType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage()
    }

    return (
        <div className='block'>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}