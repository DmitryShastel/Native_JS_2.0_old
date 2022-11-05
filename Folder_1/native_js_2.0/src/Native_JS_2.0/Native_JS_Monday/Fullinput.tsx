import React, {ChangeEvent, useState} from "react"


export const Fullinput = () => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    return (
        <div className='block'>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    )
}