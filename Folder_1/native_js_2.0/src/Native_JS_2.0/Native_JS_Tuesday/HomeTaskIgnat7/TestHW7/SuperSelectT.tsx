import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

type SuperSelectType = {
  value: string
  onChange: (e: any) => void
};

const options = [
  { label: "1", value: "option1" },
  { label: "2", value: "option2" },
  { label: "3", value: "option3" },
];

let mappedOptions = options.map((option) => (
  <option value={option.value}>{option.label}</option>
));

export const SuperSelect = (props: SuperSelectType) => {
  return (
    <div>
      <label >
        Select some options
        <select onChange={props.onChange}>{mappedOptions}</select>
      </label>
    </div>
  );
};
