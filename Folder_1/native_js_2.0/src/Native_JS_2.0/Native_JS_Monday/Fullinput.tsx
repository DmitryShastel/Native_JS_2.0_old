import React, {ChangeEvent, useState} from "react"

type addFullInputType = {
    addMessage: (title: string) => void
}

export const Fullinput = (props: addFullInputType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('')
    }


    return (
        <div className='block'>
            <input value={title} onChange={onChangeInputHandler}/>
            <button className='button' onClick={onClickButtonHandler}>+</button>
        </div>
    )
}

//event => setTitle(event.currentTarget.value)