import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

type SuperSelectType = {};

const options = [
  { label: "1", value: "option1" },
  { label: "2", value: "option2" },
  { label: "3", value: "option3" },
];

let mappedOptions = options.map((option) => (
  <option value={option.value}>{option.label}</option>
));

export const SuperSelect = () => {
  return (
    <div>
      <label>
        Select some options
        <select>{mappedOptions}</select>
      </label>

      <p>Selected </p>
    </div>
  );
};
