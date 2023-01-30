import React from 'react';

export const ToDoList = () => {
    return (
        <div>
            <h3>Title</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>
                <ul>
                    <li> <input type='checkbox' checked={true}/><span>HTML&CSS</span></li>
                    <li> <input type='checkbox' checked={true}/><span>JS</span></li>
                    <li> <input type='checkbox' checked={false}/><span>React</span></li>
                    <li> <input type='checkbox' checked={false}/><span>TypeScript</span></li>
                </ul>
            </div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}