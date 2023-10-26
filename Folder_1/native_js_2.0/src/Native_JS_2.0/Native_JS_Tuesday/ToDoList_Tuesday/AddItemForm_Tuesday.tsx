import React, {ChangeEvent, useState} from 'react';
import './ToDoList_Tuesday.css';

type AddItemType = {
    callBack: (title: string) => void
}


export const AddItemFormTuesday = (props: AddItemType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addTaskTitle = () => {
        let newTitle = title.trim()
        if (newTitle !== '') {
            props.callBack(newTitle)
            setTitle('')
        } else {
            setError('Please enter a task title')
        }
    }

    const onChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return (
        <div>
            <input
                type='text'
                value={title}
                onChange={onChangeTaskTitleHandler}
                className={error ? 'input-error' : ''}
            />
            <button onClick={addTaskTitle}>+</button>
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};