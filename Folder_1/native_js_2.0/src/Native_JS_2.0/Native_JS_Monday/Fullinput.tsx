import React from "react"
import {FilterType} from "../../App";

export type FulinputType = {
    changeFilter: (value: FilterType) => void
}


export const FullInput = (props: FulinputType) => {

    return (
        <div className='block'>
            <div>
                <input  onChange={() => {}}/>
                <button onClick={() => {}}>+</button>
            </div>
        </div>
    )
}