import React, {useState} from 'react'
import {SuperEditableSpan} from './common/SuperEditableSpanType'
import {SuperButton} from './common/SupperButton'
import {saveState} from './localStorage/localStorage'


export function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        // setValue()
    }

    return (
        <div>
            <hr/>
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