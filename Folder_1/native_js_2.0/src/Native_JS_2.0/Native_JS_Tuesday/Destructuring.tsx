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

export const ManComponent: React.FC<ManeType> = (props) => {
    return (
        <div>
            <h1>{props.address.street.title}</h1>
            <div>
                {props.name}
            </div>
        </div>
    )
}
