import React, { useState, ChangeEvent } from "react";
import s from "./SuperHW7T.module.css";
import { SuperRadioT } from "./SuperRadioT";
import { SuperSelect } from "./SuperSelectT";

const options = [1, 2, 3];

export function HW7T() {
  const [selectedOption, setSelectedOption] = useState("");
  
const handleRadioChange  = (value: any) => {
    setSelectedOption(value)
}

  return (
    <div className={s.parent}>
      <SuperRadioT
        value={selectedOption}
        options={options}
        handleChange={handleRadioChange}
      />
      <SuperSelect
        value={selectedOption}
        handleChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
