import React, {useState} from 'react'
import {SuperSelect} from './SuperSelect'
import {SuperRadio} from './SuperRadio'
import s from "./TestHW7/SuperHW7T.module.css";

const arr = ['x', 'y', 'z']

export function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div className={s.parent}>


            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}