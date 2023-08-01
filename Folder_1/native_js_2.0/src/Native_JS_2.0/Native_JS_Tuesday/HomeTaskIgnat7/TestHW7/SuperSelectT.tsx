import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";


type SuperSelectType = {
  value: string
  handleChange: (e: any) => void
  options:any [] 
};


export const SuperSelect = (props: SuperSelectType) => {

  let mappedSelectOptions = props.options.map((option) => (
    <option key={option} value={option} >{option}</option>
  ));

  return (
    <div>
      <label >
        Select some options
        <select onChange={props.handleChange}>{mappedSelectOptions}</select>
      </label>
    </div>
  );
};





















// { label: "1", value: "option8" },
// { label: "2", value: "option22" },
// { label: "3", value: "option31" },