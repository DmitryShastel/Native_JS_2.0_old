import React from "react"


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type FullInputType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}


export const FullInput = (props: FullInputType) => {

    const removeTask2 = () => {
        props.removeTask(id)
    }

    return (
        <div className='block'>
            <div>
                <h3>{props.title}</h3>
                <input/>
                <button>+</button>
                <ul>
                    {
                        props.tasks.map((t) => {
                            return <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={removeTask2}>x</button>
                            </li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

