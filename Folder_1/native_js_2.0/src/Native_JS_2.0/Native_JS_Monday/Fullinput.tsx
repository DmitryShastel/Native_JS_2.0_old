import React from "react"


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type ToDoListType = {
    title: string
    tasks: Array<TaskType>
}


export const ToDoList = (props: ToDoListType) => {


    return (
        <div className='block'>
            <div>
                <h3>{props.title}</h3>
                <input/>
                <button>+</button>
                <ul>
                    {
                        props.tasks.map(t =>
                            <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button>+</button>
                            </li>
                        )
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

        </div>
    )
}

