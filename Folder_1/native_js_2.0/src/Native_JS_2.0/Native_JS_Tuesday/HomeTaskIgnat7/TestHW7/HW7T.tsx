import React, { useState, ChangeEvent } from "react";
import s from "./SuperHW7T.module.css";
import { SuperRadioT } from "./SuperRadioT";
import { SuperSelect } from "./SuperSelectT";

export function HW7T() {
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState<string>('option1')

  const options = [
    {label: '1', value: 'option1'},
    {label: '2', value: 'option2'},
    {label: '3', value: 'option3'},
  ]

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
  };

  return (
    <div className={s.parent}>
      <SuperRadioT
        setSelectedOption={selectedOption}
        handleChange={handleChange}
      />

      <SuperSelect value={value} onChange={handleChange} />
    </div>
  );
}
