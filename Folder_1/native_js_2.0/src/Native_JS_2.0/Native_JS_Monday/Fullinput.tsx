import React from "react"

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type ToDolistType = {
    title: string
    // tasks: Array<TasksType>
}


export const ToDolist = (props: ToDolistType) => {


    return (
        <div className='block'>

            <div>
                <h3>{props.title}</h3>
                <input/>
                <button>+</button>
            </div>
        </div>
    )
}

