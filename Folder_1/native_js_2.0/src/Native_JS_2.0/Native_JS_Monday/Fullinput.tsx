import React, {ChangeEvent, useState} from "react"


type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    let[title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onclickHandler = () =>{
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div className='block'>
            <div>
                <input value={title} onChange={onChangeHandler}/>
                <button onClick={onclickHandler}>+</button>
            </div>
            <div>
                <button onClick={() => {}}>All</button>
                <button onClick={() => {}}>High</button>
                <button onClick={() => {}}>Middle</button>
                <button onClick={() => {}}>Low</button>
            </div>
        </div>
    )
}