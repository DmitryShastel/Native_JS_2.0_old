import React, {ChangeEvent, useState} from "react"

type addFullInputType = {
    addMessage: () => void
}

export const Fullinput = (props: addFullInputType) => {
    let[title, setTitle] = useState('')
    console.log(title)

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }


    return(
        <div className='block'>
            <input onChange={event => setTitle(event.currentTarget.value)}/>
            <button className='button' onClick={() => {}}>+</button>
        </div>
    )
}