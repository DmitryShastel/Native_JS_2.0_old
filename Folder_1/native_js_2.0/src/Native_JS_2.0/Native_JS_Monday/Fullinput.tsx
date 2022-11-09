import React from "react"


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type FullInputType = {
    title: string
    tasks: Array<TaskType>
}


export const FullInput = (props: FullInputType) => {

    return (
        <div className='block'>
            <div>
                <h3>{props.title}</h3>
                <input/>
                <button>+</button>
                <ul>
                    {
                        props.tasks.map((t) => {
                            return  <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={() => {}}>x</button>
                            </li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

