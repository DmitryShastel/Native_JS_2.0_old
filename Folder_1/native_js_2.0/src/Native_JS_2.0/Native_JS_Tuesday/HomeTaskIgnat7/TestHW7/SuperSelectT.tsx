import React from "react";


type SuperSelectType = {
<<<<<<< HEAD
  handleChange: (e: any) => void
  options:any [] 
  value?: any
=======
    handleChange: (e: any) => void;
    options: any [];
>>>>>>> 37dc46892675173cb4cfb7921e0219b56b56a30d
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
