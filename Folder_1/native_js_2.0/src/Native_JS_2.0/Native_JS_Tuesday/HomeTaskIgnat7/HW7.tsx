import React, {useState} from 'react'
import {SuperSelect} from './SuperSelect'
import {SuperRadio} from './SuperRadio'

const arr = ['x', 'y', 'z']

export function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7

            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
          
        </div>
    )
}