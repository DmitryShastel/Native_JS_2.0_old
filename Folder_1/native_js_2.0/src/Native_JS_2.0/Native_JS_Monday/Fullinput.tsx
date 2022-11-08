import React, {ChangeEvent, useState} from "react"


type FullInputType = {
    addNewTask: (title: string) => void
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState('')


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addNewTask(title)
        setTitle('')
    }

    return (
        <div className='block'>
            <div>
                <input value={title} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>+</button>
            </div>
        </div>
    )
}