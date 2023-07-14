import React, {useState} from 'react'
import {SuperEditableSpan} from './common/SuperEditableSpanType'
import {SuperButton} from './common/SupperButton'
import {restoreState, saveState} from './localStorage/localStorage'


export function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))

        // const restore = () => {
        //     const savedValue = restoreState<string>('editable-span-value')
        //     setValue(savedValue || '')
        // }
    }

    return (
        <div>

            homeworks 6
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </div>
    )
}

