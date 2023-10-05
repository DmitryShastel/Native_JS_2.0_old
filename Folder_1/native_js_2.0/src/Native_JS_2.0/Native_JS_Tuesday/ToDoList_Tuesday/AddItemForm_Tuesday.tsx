import React, {useState} from 'react';

type AddItemType = {
    addItem: (title: string) => void
}


export const AddItemFormTuesday = (props: AddItemType) => {

    const [title, setTitle] = useState('')


    return (
        <div>
            <input type='text'/>
            <button>+</button>
        </div>
    );
};