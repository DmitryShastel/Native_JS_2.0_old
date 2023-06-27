import React, {useState} from 'react';

export function TodoList() {
    const [todos, setTodos] = useState<any>([]);
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo() {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    }

    function handleDelete(index: number) {
        // const newTodos = [...todos];
        // newTodos.splice(index, 1);
        // setTodos(newTodos);
        
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo: string, index: number) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

