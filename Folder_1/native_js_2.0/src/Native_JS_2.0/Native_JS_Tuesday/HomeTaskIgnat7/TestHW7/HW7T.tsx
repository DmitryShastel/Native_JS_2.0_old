import React, { useState, ChangeEvent } from "react";
import s from "./SuperHW7T.module.css";
import { SuperRadioT } from "./SuperRadioT";
import { SuperSelect } from "./SuperSelectT";

 const options = [1, 2, 3];

export function HW7T() {
  const [selectedOption, setSelectedOption] = useState("");
  //const [value, setValue] = useState("");

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
    // setValue(e.currentTarget.value);
  };

  return (
    <div className={s.parent}>
      <SuperRadioT
        options={options}
        setSelectedOption={selectedOption}
        handleChange={handleChange}
      />
      <SuperSelect
        value={selectedOption}
        handleChange={handleChange}
        options={options}
      />
    </div>
  );
}
