import React, {ChangeEvent} from 'react';

type SuperCheckboxType = {
    isDone: boolean
    callback: (checked: boolean) => void
}

export const SuperCheckbox = (props: SuperCheckboxType) => {

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.callback(newIsDoneValue)
    }


    return (
        <input
            checked={props.isDone}
            type='checkbox'
            onChange={changeTaskStatus}/>
    );
};