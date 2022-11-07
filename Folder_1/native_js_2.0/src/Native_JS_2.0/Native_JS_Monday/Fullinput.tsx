import React, {useState} from "react"


export const FullInput = () => {

    let [title, setTitle] = useState('')

    return (
        <div className='block'>
            <div>
                <input  onChange={() => {}}/>
                <button>+</button>
            </div>
        </div>
    )
}