import React, {useState} from 'react';

export const UseStateComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
        </div>
    );
};

