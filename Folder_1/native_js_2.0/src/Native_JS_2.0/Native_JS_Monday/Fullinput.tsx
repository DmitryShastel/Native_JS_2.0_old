import React, {ChangeEvent, useState} from "react"


export const Fullinput = () => {
    let[title, setTitle] = useState('')

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        console.log(title)
    }


    return (
        <div className='block'>
            <input onChange={onChangeHandler}/>
            <button>+</button>
        </div>
    )
}