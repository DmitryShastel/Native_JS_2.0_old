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

