import React, {useState} from 'react';

type AddItemType = {
    callBack: (title: string) => void
}


export const AddItemFormTuesday = (props: AddItemType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    // const addTaskTitleHandler = () => {
    //     if (title.trim() === '') {
    //         setError('Please enter a task title')
    //         return
    //     }
    //     props.addTask(props.todolistId, title)
    //     setTitle('')
    //     setError('')
    // }


    return (
        <div>
            {/*<button onClick={addTaskTitleHandler}>+</button>*/}
            {/*{error && <p className="error-text">{error}</p>}*/}
        </div>
    );
};