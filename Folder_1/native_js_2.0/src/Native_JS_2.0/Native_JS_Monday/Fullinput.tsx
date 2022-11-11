import React from "react"
import {FilterType} from "../../App";


 export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type FullInputType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    filteredTasks: (value: FilterType) => void
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
                            return <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={() => {
                                    props.removeTask(t.id)}}>x
                                </button>
                            </li>
                        })
                    }
                </ul>
                <div>
                    <button onClick={()=> {props.filteredTasks('all')}}>All</button>
                    <button onClick={()=> {props.filteredTasks('active')}}>Active</button>
                    <button onClick={()=> {props.filteredTasks('completed')}}>Completed</button>
                </div>
            </div>

        </div>
    )
}

