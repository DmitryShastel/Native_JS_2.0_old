import React, {useState} from 'react';





export const AddUser = () => {

    let [users, setUsers] = useState([])



    return (
        <div>
            <input/>
            <button>Add</button>
            <div>Count:</div>
        </div>

    );
};