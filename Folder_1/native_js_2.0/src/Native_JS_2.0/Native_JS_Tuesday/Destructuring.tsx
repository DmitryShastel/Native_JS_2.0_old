import React from "react";

export type ManeType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManeType
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man: {name}} = props

    return (
        <div>
            <h1>{name}</h1>
            <div>
                {title}
            </div>
        </div>
    )
}
