import React, {ChangeEvent, useState} from "react"


export type FilterType = 'all' | 'active' | 'completed'

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type ToDoListType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    filteredTask: (value: FilterType) => void
    addTask: (title: string) => void
}



export const ToDoList = (props: ToDoListType) => {

     let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const addTask = () => {
         props.addTask(title)
        setTitle('')
    }


    return (
        <div className='block'>
            <div>
                <h3>{props.title}</h3>
                <input value={title} onChange={onChangeHandler}/>
                <button onClick={addTask}>+</button>
                <ul>
                    {
                        props.tasks.map(t =>
                            <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}  />
                                <span>{t.title}</span>
                                <button onClick={() => {props.removeTask(t.id)}}>x</button>
                            </li>
                        )
                    }
                </ul>
                <div>
                    <button onClick={() => {props.filteredTask('all')}}>All</button>
                    <button onClick={() => {props.filteredTask('active')}}>Active</button>
                    <button onClick={() => {props.filteredTask('completed')}}>Completed</button>
                </div>
            </div>

        </div>
    )
}

