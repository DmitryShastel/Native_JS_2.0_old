import React, {useState} from 'react';





export const AddUser = () => {

    let [users, setUsers] = useState([])

    const totalUsers = users.length



    return (
        <div>
            <input/>
            <button>Add</button>
            <div>Count:{totalUsers}</div>
        </div>

    );
};