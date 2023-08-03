import React from "react";


type SuperSelectType = {
    value: string
    handleChange: (e: any) => void
    options: any []
};


export const SuperSelectT = (props: SuperSelectType) => {

    let mappedSelectOptions = props.options.map((option) => (
        <option key={option} value={option}>{option}</option>
    ));

    return (
        <div>
            <label>
                Select some options
                <select onChange={props.handleChange}>{mappedSelectOptions}</select>
            </label>
        </div>
    );
};
