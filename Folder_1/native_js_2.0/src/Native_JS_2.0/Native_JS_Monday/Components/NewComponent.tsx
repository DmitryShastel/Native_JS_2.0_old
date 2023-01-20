import React from 'react';

type NewComponent = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}


export const NewComponent = (props: NewComponent) => {


    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <table>

                {topCars.map((c, index) => {
                    return (
                        <tr>
                            <th>{c.manufacturer}</th>
                            <th>{c.model}</th>
                        </tr>
                    )
                })}

            </table>

        </div>
    );
};
