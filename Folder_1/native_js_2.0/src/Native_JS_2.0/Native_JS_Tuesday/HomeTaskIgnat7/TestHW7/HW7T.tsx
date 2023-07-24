import React, {useState, ChangeEvent} from 'react'
import s from "./SuperHW7T.module.css"
import {SuperRadioT} from './SuperRadioT'



export function HW7T() {

const [selectedOption, setSelectedOption] = useState('')


let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value)
}


    return (
        <div className={s.parent}>
           <SuperRadioT/>
        </div>
    )
}