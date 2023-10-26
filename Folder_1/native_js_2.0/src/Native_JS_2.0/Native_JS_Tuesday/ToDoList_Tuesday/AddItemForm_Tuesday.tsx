import React, {useState} from 'react';

type AddItemType = {
    callBack: (title: string) => void
}


export const AddItemFormTuesday = (props: AddItemType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTaskTitleHandler = () => {
        let newTitle = title.trim()
        if (newTitle !== '') {
            props.callBack(newTitle)
            setTitle('')
        } else {
            setError('Please enter a task title')
        }
    }


    return (
        <div>
            <input type='text'/>
            <button onClick={addTaskTitleHandler}>+</button>
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};