import React, {useState} from "react"


export const Fullinput = () => {

    let [title, setTitle] = useState('')

    return (
        <div className='block'>
            <input/>
            <button>+</button>
        </div>
    )
}