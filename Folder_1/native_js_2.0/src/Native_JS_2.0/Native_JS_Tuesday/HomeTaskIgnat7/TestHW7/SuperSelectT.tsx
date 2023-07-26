import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

type SuperSelectType = {
  value: string
  handleChange: (e: any) => void
};

const selectOptions = [
  { label: "1", value: "option8" },
  { label: "2", value: "option22" },
  { label: "3", value: "option31" },
];

let mappedSelectOptions = selectOptions.map((option) => (
  <option key={option.value} value={option.value}>{option.label}</option>
));

export const SuperSelect = (props: SuperSelectType) => {
  return (
    <div>
      <label >
        Select some options
        <select onChange={props.handleChange}>{mappedSelectOptions}</select>
      </label>
    </div>
  );
};
